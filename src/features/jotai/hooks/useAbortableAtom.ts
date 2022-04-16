import { atom, useAtomValue } from 'jotai';

const urlAtom = atom('https://...');

function createAbortableAtom(url: string) {
  const abortableAtom = atom<Promise<any> | null>(null);
  abortableAtom.onMount = (setAtom) => {
    const controller = new AbortController();
    const data = fetch(url, { signal: controller.signal }).then(({ json }) => json());
    setAtom(data);
    // `return controller.abort` doesn't work because abort depends on this!
    return () => controller.abort();
  };
  return abortableAtom;
}

const wrapperAtom = atom((get) => {
  const url = get(urlAtom);
  if (!url) return atom(null);
  return createAbortableAtom(url);
});

export function useData() {
  const abortableAtom = useAtomValue(wrapperAtom);
  return useAtomValue(abortableAtom);
}
