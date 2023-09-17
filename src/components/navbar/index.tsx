import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ColorModeMenu from '../color-mode-menu';
import LanguageMenu from '../language-menu';

export default function Navbar() {
  const { t } = useTranslation();
  return (
    <AppBar position="sticky" color="default">
      <Toolbar>
        <Box
          component={Link}
          to="/"
          sx={{ display: 'flex', color: 'inherit', textDecoration: 'none', mr: 2 }}
        >
          <Typography fontSize={20} color="inherit" component="div">
            🧰 {t('Toolbox by Guo Yunhe')}
          </Typography>
        </Box>

        <Box flex="1 1 auto" />
        <LanguageMenu />
        <ColorModeMenu />
      </Toolbar>
    </AppBar>
  );
}
