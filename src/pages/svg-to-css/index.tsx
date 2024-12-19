import { useSessionStorage } from '@guoyunhe/react-storage';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import Editor from '~/components/editor';
import defaultSvg from '~/data/default-svg.svg?raw';

export default function SvgToCssPage() {
  const [svgCode, setSvgCode] = useSessionStorage('svg_input', defaultSvg);
  const [cssCode, setCssCode] = useState('');

  useEffect(() => {
    if (svgCode.trim()) {
      setCssCode(`div {
  background-image: url("data:image/svg+xml,${encodeURIComponent(svgCode)}");
}
`);
    }
  }, [svgCode]);

  return (
    <Box
      sx={{
        display: 'flex',
        flex: '1 1 100%',
        gap: 2,
        p: 2,
        overflow: 'hidden',
      }}
    >
      <Editor
        language="svg"
        value={svgCode}
        onChange={setSvgCode}
        upload
        sx={{ flex: '1 1 50%' }}
      />
      <Editor value={cssCode} language="css" sx={{ flex: '1 1 50%' }} />
    </Box>
  );
}
