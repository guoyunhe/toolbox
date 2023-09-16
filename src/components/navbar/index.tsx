import {
  Code as CodeIcon,
  DataObject as DataObjectIcon,
  DrawOutlined as DrawIcon,
  PaletteOutlined as PaletteIcon,
} from '@mui/icons-material';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
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
        <Box
          component={Link}
          to="/"
          sx={{ display: 'flex', color: 'inherit', textDecoration: 'none', mr: 2 }}
        >
          <Typography fontSize={20} color="inherit" component="div">
            🧰 {t('Toolbox by Guo Yunhe')}
          </Typography>
        </Box>
        <NavButton to="/json" startIcon={<DataObjectIcon />}>
          JSON
        </NavButton>
        <NavButton to="/xml" startIcon={<CodeIcon />}>
          XML
        </NavButton>
        <NavButton to="/svg" startIcon={<DrawIcon />}>
          SVG
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
