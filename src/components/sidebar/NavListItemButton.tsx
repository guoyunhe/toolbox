import { ListItemButton, ListItemButtonProps } from '@mui/material';
import { NavLink, useLocation } from 'react-router';

export interface NavListItemButtonProps extends ListItemButtonProps {
  to: string;
}

export default function NavListItemButton({ to, ...props }: NavListItemButtonProps) {
  const location = useLocation();
  return (
    <ListItemButton selected={location.pathname === to} component={NavLink} to={to} {...props} />
  );
}
