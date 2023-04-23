import { Button } from '@mui/material';
import { ReactNode } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export interface NavButtonProps {
  to: string;
  startIcon?: ReactNode;
  children: ReactNode;
}

export default function NavButton({ children, startIcon, to }: NavButtonProps) {
  const location = useLocation();
  return (
    <Button
      variant={location.pathname === to ? 'contained' : 'text'}
      disableElevation
      color="inherit"
      component={NavLink}
      to={to}
      startIcon={startIcon}
    >
      {children}
    </Button>
  );
}
