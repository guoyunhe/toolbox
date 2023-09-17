import { ArrowRight } from '@mui/icons-material';
import { Avatar, Drawer, List, ListItemButton, ListSubheader } from '@mui/material';
import jsonLogo from '../../images/json-logo.svg';
import svgLogo from '../../images/svg-logo.svg';

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      open
      sx={{
        width: 250,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 250, top: 64, boxSizing: 'border-box' },
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
        <ListItemButton>
          JSON <ArrowRight /> Object
        </ListItemButton>
        <ListItemButton>
          JSON <ArrowRight /> Formatted
        </ListItemButton>
        <ListItemButton>
          JSON <ArrowRight /> TypeScript Type
        </ListItemButton>
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
        <ListItemButton>
          SVG <ArrowRight /> Minified
        </ListItemButton>
        <ListItemButton>
          SVG <ArrowRight /> Formatted
        </ListItemButton>
        <ListItemButton>
          SVG <ArrowRight /> Inline URL
        </ListItemButton>
        <ListItemButton>
          SVG <ArrowRight /> Inline CSS
        </ListItemButton>
        <ListItemButton>
          SVG <ArrowRight /> React Component
        </ListItemButton>
        <ListItemButton>
          SVG <ArrowRight /> PNG/WEBP/AVIF
        </ListItemButton>
      </List>
    </Drawer>
  );
}
