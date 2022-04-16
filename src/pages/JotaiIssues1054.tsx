// https://github.com/pmndrs/jotai/issues/1054
import { Box } from '@mui/material';
import { atom, useAtom } from 'jotai';
import React, { Suspense } from 'react';

const INITIAL_VALUE = null;
const nullableAtom = atom<number | null>(INITIAL_VALUE);

function fakeFetchRandomValueWithDelay() {
  return new Promise<number>((resolve) => {
    setTimeout(() => resolve(Math.random()), 2000);
  });
}

function AtomController() {
  const [, setAtom] = useAtom(nullableAtom);

  return (
    <button
      type="button"
      onClick={() => {
        setAtom(null);
        fakeFetchRandomValueWithDelay().then((value) => setAtom(value));
      }}
    >
      Fetch new value
    </button>
  );
}

function NullableViewer() {
  const [natom] = useAtom(nullableAtom);
  return (
    <h3>
      Atom with null value:
      {JSON.stringify(natom)}
    </h3>
  );
}

const atomWithSuspense = atom((get) => {
  const value = get(nullableAtom);
  if (value === null) {
    return new Promise(() => {});
  }
  return value;
});

function SuspenseViewer() {
  const [satom] = useAtom(atomWithSuspense);
  return (
    <h3>
      Atom:
      {JSON.stringify(satom)}
    </h3>
  );
}

function SuspenseFallback() {
  return <h3>Suspense</h3>;
}

export function JotaiIssues1054() {
  return (
    <Box>
      <AtomController />
      <NullableViewer />
      <Suspense fallback={<SuspenseFallback />}>
        <SuspenseViewer />
      </Suspense>
    </Box>
  );
}
