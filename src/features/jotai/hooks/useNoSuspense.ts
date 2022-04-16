import { atom, useAtomValue, useSetAtom } from 'jotai';

const idAtom = atom<string | null>(null);

function getData(id: string) {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(`this is data for ${id}!`);
    }, 1 * 1000);
  });
}

type FetchResult = {
  loading: boolean;
  error: Error | null;
  data: string | null;
};

const fetchResultAtom = atom<FetchResult>({ loading: true, error: null, data: null });

function createRunFetchAtomAtom(id: string | null) {
  const runFetchAtom = atom(
    (get) => get(fetchResultAtom),
    (get, set, newId: string) => {
      set(fetchResultAtom, (prev) => ({ ...prev, loading: true }));
      const fetchData = async () => {
        try {
          const data = await getData(newId);
          set(fetchResultAtom, { loading: false, error: null, data });
        } catch (e) {
          const error = e instanceof Error ? e : new Error('Fetch Error: Unexpected Error');
          set(fetchResultAtom, { loading: false, error, data: null });
        }
      };
      fetchData();
    },
  );
  runFetchAtom.onMount = (setAtom) => {
    if (id) setAtom(id);
    // TODO: return an abort function for getData
  };
  return runFetchAtom;
}

const runFetchAtomAtom = atom((get) => {
  const id = get(idAtom);
  return createRunFetchAtomAtom(id);
});

export function useSetId() {
  return useSetAtom(idAtom);
}

export function useResult() {
  return useAtomValue(useAtomValue(runFetchAtomAtom));
}
