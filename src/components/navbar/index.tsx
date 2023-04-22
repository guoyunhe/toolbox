import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link, NavLink } from 'react-router-dom';
import ColorModeMenu from '../color-mode-menu';
import LanguageMenu from '../language-menu';

export default function Navbar() {
  const { t } = useTranslation();
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Box
          component={Link}
          to="/"
          sx={{ display: 'flex', color: 'inherit', textDecoration: 'none', mr: 2 }}
        >
          <Box component="img" src="/logo.svg" sx={{ mr: 1 }} />
          <Typography variant="h6" color="inherit" component="div">
            {t('Toolbox by Guo Yunhe')}
          </Typography>
        </Box>
        <Button variant="text" color="inherit" component={NavLink} to="/json">
          JSON
        </Button>
        <Box flex="1 1 auto" />
        <LanguageMenu />
        <ColorModeMenu />
      </Toolbar>
    </AppBar>
  );
}
