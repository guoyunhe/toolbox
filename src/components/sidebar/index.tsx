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
        <NavListItemButton to="/json-format">{t('JSON format')}</NavListItemButton>
        <NavListItemButton to="/json-flatten">{t('JSON flatten')}</NavListItemButton>
        <NavListItemButton to="/json-unflatten">{t('JSON unflatten')}</NavListItemButton>
        <NavListItemButton to="/json-to-type">JSON ➡️ TypeScript</NavListItemButton>
        <NavListItemButton to="/json-to-url">JSON ➡️ URL</NavListItemButton>
      </List>
      <List subheader={<ListSubheader>URL</ListSubheader>}>
        <NavListItemButton to="/url-to-json">URL ➡️ JSON</NavListItemButton>
        <NavListItemButton to="/json-to-url">JSON ➡️ URL</NavListItemButton>
      </List>
      <List subheader={<ListSubheader>{t('List')}</ListSubheader>}>
        <NavListItemButton to="/list-dedup">{t('List dedup')}</NavListItemButton>
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
