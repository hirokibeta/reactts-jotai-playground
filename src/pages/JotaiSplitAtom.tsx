import { Box } from '@mui/material';
import { SplitAtom } from '@src/features/jotai/compoments/SplitAtom';

export function JotaiSplitAtom() {
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
      <SplitAtom />
    </Box>
  );
}
