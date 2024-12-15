import { Drawer, List, ListItemText, ListSubheader } from '@mui/material';
import { useTranslation } from 'react-i18next';
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
      <List subheader={<ListSubheader>JSON</ListSubheader>}>
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
        <NavListItemButton to="/list-shuffle">{t('List shuffle/randomize')}</NavListItemButton>
      </List>
      <List subheader={<ListSubheader>SVG</ListSubheader>}>
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
