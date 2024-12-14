import { Box, Stack, Typography } from '@mui/material';
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
      <title>{title}</title>
      <Box
        component="header"
        sx={{ flex: '0 0 auto', display: 'flex', alignItems: 'center', p: 2, gap: 2 }}
      >
        <Box>
          <Typography variant="h1">{title}</Typography>
          <Typography variant="caption">{description}</Typography>
        </Box>
        <Stack sx={{ gap: 2 }}>{settings}</Stack>
      </Box>
      <Box sx={{ flex: '1 1 auto', display: 'flex' }}>{children}</Box>
    </Box>
  );
}
