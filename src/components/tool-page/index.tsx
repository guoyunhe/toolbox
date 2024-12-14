import { Box, Typography } from '@mui/material';
import { ReactNode } from 'react';

export interface ToolPageProps {
  title: ReactNode;
  description?: ReactNode;
  children: ReactNode;
}

export default function ToolPage({ title, description, children }: ToolPageProps) {
  return (
    <Box sx={{ flex: '1 1 auto', display: 'flex', flexDirection: 'column' }}>
      <Box component="header" sx={{ flex: '0 0 auto', p: 2 }}>
        <title>{title}</title>
        <Typography variant="h1">{title}</Typography>
        <Typography variant="caption">{description}</Typography>
      </Box>
      <Box sx={{ flex: '1 1 auto', display: 'flex' }}>{children}</Box>
    </Box>
  );
}
