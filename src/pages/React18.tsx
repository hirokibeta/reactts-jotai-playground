import { Box } from '@mui/material';
import { NoSuspense } from '@src/features/react18/components/NoSuspense';

export function React18() {
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
      <NoSuspense />
    </Box>
  );
}
