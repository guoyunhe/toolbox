import { PaletteMode, useMediaQuery } from '@mui/material';
import useLocalStorage from './useLocalStorage';

export default function useColorMode() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const systemColorMode = prefersDarkMode ? 'dark' : 'light';

  const [userColorMode, setUserColorMode] = useLocalStorage<PaletteMode | 'auto'>(
    'color_mode',
    'auto'
  );

  const colorMode = userColorMode === 'auto' ? systemColorMode : (userColorMode as PaletteMode);

  return { colorMode, userColorMode, setUserColorMode, systemColorMode };
}
