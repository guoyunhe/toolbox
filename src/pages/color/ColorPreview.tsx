import { Error as ErrorIcon } from '@mui/icons-material';
import { Box, Stack } from '@mui/material';
import Color from 'color';

export interface ColorPreviewProps {
  color: Color;
}

export default function ColorPreview({ color }: ColorPreviewProps) {
  return (
    <Stack direction="row">
      <Stack>
        <Box
          sx={{
            bgcolor: color.hexa(),
            color: '#ffffff',
            p: 2,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          ABCD 1234 <ErrorIcon />
        </Box>
        <Box
          sx={{
            color: color.hexa(),
            bgcolor: '#ffffff',
            p: 2,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          ABCD 1234 <ErrorIcon />
        </Box>
      </Stack>
      <Stack>
        <Box
          sx={{
            color: color.hexa(),
            bgcolor: '#000000',
            p: 2,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          ABCD 1234 <ErrorIcon />
        </Box>
        <Box
          sx={{
            bgcolor: color.hexa(),
            color: '#000000',
            p: 2,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          ABCD 1234 <ErrorIcon />
        </Box>
      </Stack>
    </Stack>
  );
}
