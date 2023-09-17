import { Box, CircularProgress, CssBaseline } from '@mui/material';
import { DualThemeProvider } from 'mui-palette-mode';
import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { darkTheme, lightTheme } from './themes';

export default function App() {
  return (
    <Suspense
      fallback={
        <Box
          sx={{
            position: 'fixed',
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CircularProgress />
        </Box>
      }
    >
      <DualThemeProvider lightTheme={lightTheme} darkTheme={darkTheme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </DualThemeProvider>
    </Suspense>
  );
}
