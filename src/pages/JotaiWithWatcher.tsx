// https://github.com/pmndrs/jotai/issues/1054
// https://github.com/pmndrs/jotai/issues/1114#issuecomment-1109059418
import { Box } from '@mui/material';
import { atom, useAtom } from 'jotai';
import { loadable } from 'jotai/utils';
import React, { Suspense } from 'react';

// add start
// 最初にnullableAtomがuseAtomされないとダメ
const dummyAtom = atom('dummy atom');
function DummyViewer() {
  const [other] = useAtom(dummyAtom);
  return <h3>{other}</h3>;
}
// add end

const baseAtom = atom<boolean>(true);
const derivedAtom = atom((get) => {
  const value = get(baseAtom);
  if (value) {
    return new Promise<number>(() => {});
  }
  return 1;
});

function AtomController() {
  const [, setAtom] = useAtom(baseAtom);

  return (
    <button
      type="button"
      onClick={() => {
        setAtom((v) => !v);
      }}
    >
      update base atom
    </button>
  );
}

function SuspenseViewer() {
  const [v] = useAtom(derivedAtom);
  return (
    <h3>
      Derived Atom:
      {v}
    </h3>
  );
}

function DerivedAtomWatcher() {
  useAtom(loadable(derivedAtom));
  return null;
}

function SuspenseFallback() {
  return <h3>Suspense</h3>;
}

export function JotaiWithWatcher() {
  return (
    <Box>
      <DummyViewer />
      <AtomController />

      <DerivedAtomWatcher />
      <Suspense fallback={<SuspenseFallback />}>
        <SuspenseViewer />
      </Suspense>
    </Box>
  );
}
