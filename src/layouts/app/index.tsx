import { Box, CircularProgress } from '@mui/material';
import { Suspense } from 'react';
import { Outlet } from 'react-router';
import Navbar from '~/components/navbar';
import Sidebar from '~/components/sidebar';

export default function AppLayout() {
  return (
    <Box height="100vh" display="flex" flexDirection="column" overflow="hidden">
      <Navbar />
      <Box
        sx={{
          display: 'flex',
          overflow: 'hidden',
          height: '100%',
        }}
      >
        <Sidebar />
        <Suspense
          fallback={
            <Box
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <CircularProgress />
            </Box>
          }
        >
          <Outlet />
        </Suspense>
      </Box>
    </Box>
  );
}
