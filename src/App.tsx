import { Box, CircularProgress, CssBaseline, ThemeProvider } from '@mui/material';
import { createCompactTheme } from 'mui-material-compact';
import { Suspense, useMemo } from 'react';
import { RouterProvider } from 'react-router-dom';
import useColorMode from './hooks/useColorMode';
import router from './router';

export default function App() {
  const { colorMode } = useColorMode();

  const theme = useMemo(
    () =>
      createCompactTheme({
        palette: {
          mode: colorMode,
        },
      }),
    [colorMode],
  );

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
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Suspense>
  );
}
