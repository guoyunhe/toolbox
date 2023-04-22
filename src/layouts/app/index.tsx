import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from 'src/components/navbar';

export default function AppLayout() {
  return (
    <Box height="100vh" display="flex" flexDirection="column" overflow="hidden">
      <Navbar />
      <Outlet />
    </Box>
  );
}
