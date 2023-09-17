import { Box, Toolbar } from '@mui/material';
import { useEffect, useState } from 'react';
import { optimize } from 'svgo';
import DownloadButton from '../../components/download-button';
import Editor from '../../components/editor';
import SvgSourceEditor from '../../components/svg-source-editor';

export default function SvgMinifyPage() {
  const [svgCode, setSvgCode] = useState('');
  const [minified, setMinified] = useState('');

  useEffect(() => {
    const result = optimize(svgCode, {});
    setMinified(result.data);
  }, [svgCode]);

  return (
    <Box
      sx={{
        display: 'flex',
        flex: '1 1 100%',
        gap: 2,
        px: 2,
        pb: 2,
        overflow: 'hidden',
      }}
    >
      <SvgSourceEditor
        value={svgCode}
        onChange={setSvgCode}
        sx={{ flex: '1 1 50%', overflow: 'hidden' }}
      />
      <Box sx={{ flex: '1 1 50%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <Toolbar disableGutters>
          <DownloadButton data={minified} filename="minified.svg" />
        </Toolbar>
        <Editor code={minified} language="markup" sx={{ flex: '1 1 auto' }} />
      </Box>
    </Box>
  );
}
