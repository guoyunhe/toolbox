import { GitHub } from '@mui/icons-material';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { PaletteModeButton } from 'mui-palette-mode';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
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
          <Typography sx={{ fontSize: 20 }} color="inherit" component="div">
            🧰 {t('Toolbox by Guo Yunhe')}
          </Typography>
        </Box>

        <Box sx={{ flex: '1 1 auto' }} />

        <Button color="inherit" startIcon={<GitHub />} href="https://github.com/guoyunhe/toolbox">
          GitHub
        </Button>

        <LanguageMenu />
        <PaletteModeButton />
      </Toolbar>
    </AppBar>
  );
}
