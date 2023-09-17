import { Box, Toolbar } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import DownloadButton from 'src/components/download-button';
import Editor from 'src/components/editor';

export interface ReactOutputViewerProps {
  svgCode: string;
}

export default function ReactOutputViewer({ svgCode }: ReactOutputViewerProps) {
  const [reactCode, setReactCode] = useState('');

  useEffect(() => {
    axios
      .post('https://api.react-svgr.com/api/svgr', {
        code: svgCode,
        options: {
          dimensions: true,
          icon: false,
          native: false,
          typescript: false,
          ref: false,
          memo: false,
          titleProp: false,
          descProp: false,
          expandProps: 'end',
          replaceAttrValues: {},
          svgProps: {},
          exportType: 'default',
          namedExport: 'ReactComponent',
          jsxRuntime: 'classic',
          svgo: true,
          svgoConfig: {
            plugins: [{ name: 'preset-default', params: { overrides: { removeTitle: false } } }],
          },
          prettier: true,
          prettierConfig: { semi: false },
        },
      })
      .then((res) => {
        setReactCode(res.data.output || '');
      });
  }, [svgCode]);

  return (
    <Box sx={{ flex: '1 1 50%' }}>
      <Toolbar variant="dense">
        <DownloadButton data={reactCode} filename="SvgComponent.tsx" />
      </Toolbar>
      <Editor code={reactCode} language="jsx" style={{ flex: '1 1 auto' }} />
    </Box>
  );
}
