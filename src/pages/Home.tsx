import { Box, Typography } from '@mui/material';

export function Home() {
  return (
    <Box
      sx={{
        height: '100%',
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
        <Typography variant="h3">Hi, this is our home :)</Typography>
      </Box>
    </Box>
  );
}
