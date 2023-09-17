import { DarkMode, LightMode } from '@mui/icons-material';
import { Button, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import useColorMode from '../../hooks/useColorMode';

export default function ColorModeMenu() {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const { colorMode, userColorMode, setUserColorMode, systemColorMode } = useColorMode();

  const menu = [
    {
      code: 'auto',
      name: t('Auto'),
      icon: systemColorMode === 'dark' ? <DarkMode /> : <LightMode />,
    },
    {
      code: 'light',
      name: t('Light'),
      icon: <LightMode />,
    },
    {
      code: 'dark',
      name: t('Dark'),
      icon: <DarkMode />,
    },
  ];

  const active = menu.find((item) => item.code === userColorMode);

  return (
    <>
      <Button
        id="color-mode-menu-button"
        aria-controls="color-mode-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color="inherit"
        startIcon={active?.icon}
      >
        {active?.name}
      </Button>
      <Menu
        id="color-mode-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => {
          setAnchorEl(null);
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        MenuListProps={{
          'aria-labelledby': 'color-mode-menu-button',
        }}
      >
        {menu.map((item) => (
          <MenuItem
            key={item.code}
            onClick={() => {
              setUserColorMode(item.code as any);
              setAnchorEl(null);
            }}
            selected={userColorMode === item.code}
          >
            {item.icon}
            <span style={{ marginRight: 8 }} />
            {item.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
