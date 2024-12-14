import { Box, Toolbar, Typography } from '@mui/material';
import { ReactNode } from 'react';

export interface ToolPageProps {
  title: ReactNode;
  description?: ReactNode;
  settings?: ReactNode;
  children: ReactNode;
}

export default function ToolPage({ title, description, settings, children }: ToolPageProps) {
  return (
    <Box sx={{ flex: '1 1 auto', display: 'flex', flexDirection: 'column' }}>
      <Box component="header" sx={{ flex: '0 0 auto' }}>
        <Box sx={{ p: 2 }}>
          <title>{title}</title>
          <Typography variant="h1">{title}</Typography>
          <Typography variant="caption">{description}</Typography>
        </Box>
        <Toolbar>{settings}</Toolbar>
      </Box>
      <Box sx={{ flex: '1 1 auto', display: 'flex' }}>{children}</Box>
    </Box>
  );
}
