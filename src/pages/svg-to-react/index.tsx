import { useSessionStorage } from '@guoyunhe/react-storage';
import { Box } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Editor from '../../components/editor';
import defaultSvg from '../../data/default-svg.svg?raw';

export default function SvgToReactPage() {
  const { t } = useTranslation();
  const [svgCode, setSvgCode] = useSessionStorage('svg_input', defaultSvg);
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
            jsxRuntime: 'automatic',
            svgo: true,
            svgoConfig: {
              plugins: [{ name: 'preset-default', params: { overrides: { removeTitle: true } } }],
            },
            prettier: true,
            prettierConfig: {},
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
      <Editor
        title={t('React component')}
        loading={loading}
        value={reactCode}
        language="jsx"
        download="SvgComponent.tsx"
        sx={{ flex: '1 1 50%' }}
      />
    </Box>
  );
}
