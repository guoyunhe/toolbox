import { Avatar, Box, Chip, Toolbar } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import DownloadButton from '../../components/download-button';
import Editor from '../../components/editor';
import SvgSourceEditor from '../../components/svg-source-editor';
import reactLogo from '../../images/react-logo.svg';

export default function SvgToReactPage() {
  const [svgCode, setSvgCode] = useState('');
  const [reactCode, setReactCode] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (svgCode.trim()) {
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
    }
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
          <Chip
            color="primary"
            variant="outlined"
            label="React"
            avatar={<Avatar src={reactLogo} />}
          />
          <DownloadButton data={reactCode} filename="SvgComponent.tsx" />
        </Toolbar>
        <Editor loading={loading} code={reactCode} language="jsx" sx={{ flex: '1 1 auto' }} />
      </Box>
    </Box>
  );
}
