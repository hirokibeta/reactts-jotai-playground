import { Box } from '@mui/material';
import { atom, useAtom } from 'jotai';
import { loadable } from 'jotai/utils';
import { useEffect } from 'react';

const countAtom = atom<number>(0);

const derivedAtom = atom((get) => {
  const count = get(countAtom);
  return new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(count);
    }, 5 * 1000);
  });
});

function LoadableViewer() {
  const [loadableValue] = useAtom(loadable(derivedAtom));
  useEffect(() => {
    if (loadableValue.state === 'hasError') console.error(loadableValue.error);
  }, [loadableValue]);
  return (
    <>
      <h3>
        state:
        {loadableValue.state}
      </h3>
      <h3>
        value:
        {loadableValue.state === 'hasData' ? loadableValue.data : '-'}
      </h3>
    </>
  );
}

export function JotaiLoadableBug() {
  const [count, setAtom] = useAtom(countAtom);

  return (
    <Box>
      <h4>Be careful! Clicking this button a third time will trigger infinite loop!</h4>
      <button
        type="button"
        onClick={() => {
          setAtom((_count) => (_count > 1 ? _count : _count + 1));
        }}
      >
        Fetch new value
      </button>
      <h3>
        count:
        {count}
      </h3>
      <LoadableViewer />
    </Box>
  );
}
