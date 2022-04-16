import { atom, useAtomValue, useSetAtom } from 'jotai';

const idAtom = atom<string | null>(null);

function getData(id: string) {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(`this is data for ${id}!`);
    }, 1 * 1000);
  });
}

const cancelableBaseAtom = atom<Promise<string> | string | null>(null);

function createCancelableAtom(url: string) {
  const cancelableAtom = atom(
    (get) => get(cancelableBaseAtom),
    (get, set, update: Promise<string>) => {
      set(cancelableBaseAtom, update);
    },
  );
  cancelableAtom.onMount = (setAtom) => {
    // set abortcontroller
    setAtom(getData(url));
    return () => {
      // return abort functions
    };
  };
  return cancelableAtom;
}

const wrapperAtom = atom((get) => {
  const url = get(idAtom);
  if (!url) return atom(null);
  return createCancelableAtom(url);
});

export function useData() {
  const cancelableAtom = useAtomValue(wrapperAtom);
  return useAtomValue(cancelableAtom);
}

export function useSetId() {
  return useSetAtom(idAtom);
}
