import { Box } from '@mui/material';
import { useState } from 'react';
import SvgSourceEditor from 'src/components/svg-source-editor';
import ReactOutputViewer from './OutputEditor';

export default function SvgToReactPage() {
  const [svgCode, setSvgCode] = useState('');

  return (
    <Box
      sx={{
        display: 'flex',
        flex: '1 1 auto',
        gap: 2,
        px: 2,
        overflow: 'hidden',
      }}
    >
      <SvgSourceEditor
        value={svgCode}
        onChange={setSvgCode}
        sx={{ flex: '1 1 50%', overflow: 'hidden' }}
      />
      <ReactOutputViewer svgCode={svgCode} />
    </Box>
  );
}
