import { Box, CircularProgress } from '@mui/material';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from 'src/components/navbar';
import Sidebar from 'src/components/sidebar';

export default function AppLayout() {
  return (
    <Box height="100vh" display="flex" flexDirection="column" overflow="hidden">
      <Navbar />
      <Box sx={{ display: 'flex', justifyContent: 'stretch', overflow: 'hidden' }}>
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
