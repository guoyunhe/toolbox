import { Drawer, List, ListItemButton } from '@mui/material';
import { store, useLowduxSelector } from 'lowdux';

export default function Sidebar() {
  const open = useLowduxSelector<boolean>('sidebarOpen');
  return (
    <Drawer open={open || false} onClose={() => store.set('sidebarOpen', false)}>
      <List>
        <ListItemButton>JSON</ListItemButton>
      </List>
    </Drawer>
  );
}
