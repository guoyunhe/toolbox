import {
  DataObject as DataObjectIcon,
  Menu,
  PaletteOutlined as PaletteIcon,
} from '@mui/icons-material';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { store } from 'lowdux';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ColorModeMenu from '../color-mode-menu';
import LanguageMenu from '../language-menu';
import NavButton from './NavButton';

export default function Navbar() {
  const { t } = useTranslation();
  return (
    <AppBar position="static" color="inherit">
      <Toolbar>
        <IconButton edge="start" onClick={() => store.set('sidebarOpen', true)}>
          <Menu />
        </IconButton>
        <Box
          component={Link}
          to="/"
          sx={{ display: 'flex', color: 'inherit', textDecoration: 'none', mr: 2 }}
        >
          <Typography variant="h6" color="inherit" component="div">
            {t('Toolbox by Guo Yunhe')}
          </Typography>
        </Box>
        <NavButton to="/json" startIcon={<DataObjectIcon />}>
          JSON
        </NavButton>
        <NavButton to="/color" startIcon={<PaletteIcon />}>
          {t('Color')}
        </NavButton>
        <Box flex="1 1 auto" />
        <LanguageMenu />
        <ColorModeMenu />
      </Toolbar>
    </AppBar>
  );
}
