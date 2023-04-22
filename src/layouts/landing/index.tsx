import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Footer from 'src/components/footer';
import Navbar from 'src/components/navbar';

export default function LandingLayout() {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Navbar />
      <Box flex="1 1 auto">
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
