import { Box, Button, Typography } from '@mui/material';
import { useTransition } from 'react';
import { nanoid } from 'nanoid';
import { useSetId, useData } from '../hooks/useNoSuspense';

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
        <Typography variant="h3">React18 useTransition</Typography>
        <Typography variant="h4">{isPending ? 'loading' : 'hasData'}</Typography>
        <Typography variant="h4">{data}</Typography>

        <Button onClick={handleClick}>update value!</Button>
      </Box>
    </Box>
  );
}
