import { Box, Button, Typography } from '@mui/material';
import { Suspense } from 'react';
import { nanoid } from 'nanoid';
import { useSetId, useData } from '../hooks/useCancelableAtom';

function DataBox() {
  const data = useData();
  return <Typography variant="h4">{data ?? '-'}</Typography>;
}

function Fallback() {
  return <Typography variant="h4">loading...</Typography>;
}

export function Cancelable() {
  const setId = useSetId();

  const handleClick = () => {
    setId(nanoid());
  };

  return (
    <Box
      sx={{
        height: '400px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          textAlign: 'center',
        }}
      >
        <Typography variant="h3">Jotai Cancelable</Typography>
        <Suspense fallback={Fallback()}>
          <DataBox />
        </Suspense>

        <Button onClick={handleClick}>update value!</Button>
      </Box>
    </Box>
  );
}
