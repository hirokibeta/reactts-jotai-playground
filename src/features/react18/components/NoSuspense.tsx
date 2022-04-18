import { Box, Button, Typography } from '@mui/material';
import { Suspense, useTransition } from 'react';
import { nanoid } from 'nanoid';
import { useSetId, useData } from '../hooks/useNoSuspense';

function Fallback() {
  return <Typography variant="h4">loading...</Typography>;
}

export function NoSuspense() {
  const [isPending, startTransition] = useTransition();

  const data = useData();
  const setId = useSetId();

  const handleClick = () => {
    startTransition(() => {
      setId(nanoid());
    });
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
        <Typography variant="h3">Jotai No Suspense</Typography>
        <Typography variant="h4">{isPending ? 'loading' : 'hasData'}</Typography>
        <Suspense fallback={Fallback()}>
          <Typography variant="h4">{data ?? '-'}</Typography>
        </Suspense>

        <Button onClick={handleClick}>update value!</Button>
      </Box>
    </Box>
  );
}
