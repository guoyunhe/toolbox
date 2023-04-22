import { CssBaseline, ThemeProvider } from '@mui/material';
import { createCompactTheme } from 'mui-material-compact';
import { useMemo } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import useColorMode from './hooks/useColorMode';
import routes from './routes';

const router = createBrowserRouter(routes);

export default function App() {
  const { colorMode } = useColorMode();

  const theme = useMemo(
    () =>
      createCompactTheme({
        palette: {
          mode: colorMode,
        },
      }),
    [colorMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
