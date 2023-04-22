import { Button, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import useColorMode from 'src/hooks/useColorMode';

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
      icon: systemColorMode === 'dark' ? '🌙' : '☀️',
    },
    {
      code: 'light',
      name: t('Light'),
      icon: '☀️',
    },
    {
      code: 'dark',
      name: t('Dark'),
      icon: '🌙',
    },
  ];

  return (
    <>
      <Button
        id="color-mode-menu-button"
        aria-controls="color-mode-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color="inherit"
      >
        {colorMode === 'dark' ? '🌙' : '☀️'} {userColorMode}
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
            {item.icon} {item.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
