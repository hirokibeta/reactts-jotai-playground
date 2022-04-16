import { Box } from '@mui/material';
import { Cancelable } from '@src/features/jotai/compoments/Cancelable';
import { NoSuspense } from '@src/features/jotai/compoments/NoSuspense';

export function Jotai() {
  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Cancelable />
      <NoSuspense />
    </Box>
  );
}
