import { Avatar, Box, Chip, Toolbar } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import DownloadButton from 'src/components/download-button';
import Editor from 'src/components/editor';
import reactLogo from '../../images/react-logo.svg';

export interface ReactOutputViewerProps {
  svgCode: string;
}

export default function ReactOutputViewer({ svgCode }: ReactOutputViewerProps) {
  const [reactCode, setReactCode] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
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
      })
      .finally(() => {
        setLoading(false);
      });
  }, [svgCode]);

  return (
    <Box sx={{ flex: '1 1 50%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <Toolbar disableGutters>
        <Chip
          color="primary"
          variant="outlined"
          label="React"
          avatar={<Avatar src={reactLogo} />}
        />
        <DownloadButton data={reactCode} filename="SvgComponent.tsx" />
      </Toolbar>
      <Editor
        loading={loading}
        disabled
        code={reactCode}
        language="jsx"
        sx={{ flex: '1 1 auto', overflow: 'auto' }}
      />
    </Box>
  );
}
