import { Box, Paper } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { AppHeader } from '@src/common/components/AppHeader';

export function Layout() {
  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100%',
        overflow: 'hidden',
      }}
    >
      <AppHeader />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          overflowY: 'scroll',
          padding: 2,
          paddingTop: 10,
        }}
      >
        <Outlet />
      </Box>

      <Paper
        elevation={1}
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
        }}
      />
    </Box>
  );
}
