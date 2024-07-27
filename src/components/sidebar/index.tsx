import { ArrowRight } from '@mui/icons-material';
import { Avatar, Drawer, List, ListItemText, ListSubheader } from '@mui/material';
import { useTranslation } from 'react-i18next';
import jsonLogo from '../../images/json-logo.svg';
import svgLogo from '../../images/svg-logo.svg';
import NavListItemButton from './NavListItemButton';

export default function Sidebar() {
  const { t } = useTranslation();

  return (
    <Drawer
      variant="permanent"
      open
      sx={{
        width: 250,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 250, top: 64, boxSizing: 'border-box', zIndex: 0 },
      }}
    >
      <List
        subheader={
          <ListSubheader>
            <Avatar
              src={jsonLogo}
              sx={{ display: 'inline-block', width: 24, height: 24, my: -0.8, mr: 1 }}
            />
            JSON
          </ListSubheader>
        }
      >
        <NavListItemButton to="/json-tree">{t('JSON tree')}</NavListItemButton>
        <NavListItemButton to="/json-format">{t('JSON format')}</NavListItemButton>
        <NavListItemButton to="/json">
          JSON <ArrowRight /> Object
        </NavListItemButton>
        <NavListItemButton to="/json">
          JSON <ArrowRight /> CSS
        </NavListItemButton>
        <NavListItemButton to="/json">
          JSON <ArrowRight /> TypeScript Type
        </NavListItemButton>
      </List>
      <List
        subheader={
          <ListSubheader>
            <Avatar
              src={svgLogo}
              sx={{ display: 'inline-block', width: 24, height: 24, my: -0.5, mr: 1 }}
            />
            SVG
          </ListSubheader>
        }
      >
        <NavListItemButton to="svg-minify">
          <ListItemText primary="SVG minify" />
        </NavListItemButton>
        <NavListItemButton to="/svg-to-url">
          <ListItemText primary="SVG to URL" />
        </NavListItemButton>
        <NavListItemButton to="/svg-to-css">
          <ListItemText primary="SVG to CSS" />
        </NavListItemButton>
        <NavListItemButton to="/svg-to-react">
          <ListItemText primary="SVG to React component" />
        </NavListItemButton>
        <NavListItemButton to="/svg-to-image">
          <ListItemText primary="SVG to PNG/WEBP/AVIF" />
        </NavListItemButton>
      </List>
    </Drawer>
  );
}
