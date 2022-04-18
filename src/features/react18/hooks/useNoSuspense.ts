import { atom, useAtomValue, useSetAtom } from 'jotai';

const idAtom = atom<string | null>(null);

function getData(id: string) {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(`this is data for ${id}!`);
    }, 1 * 1000);
  });
}

const dataAtom = atom((get) => {
  const id = get(idAtom);
  return id ? getData(id) : null;
});

export function useSetId() {
  return useSetAtom(idAtom);
}

export function useData() {
  return useAtomValue(dataAtom);
}
