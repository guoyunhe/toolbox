import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from 'src/components/navbar';
import Sidebar from 'src/components/sidebar';

export default function AppLayout() {
  return (
    <Box height="100vh" display="flex" flexDirection="column" overflow="hidden">
      <Navbar />
      <Sidebar />
      <Outlet />
    </Box>
  );
}
