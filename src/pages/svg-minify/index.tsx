import { useLocalStorage } from '@guoyunhe/react-storage';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { optimize } from 'svgo';
import Editor from '../../components/editor';
import defaultSvg from '../../data/default-svg.svg?raw';

export default function SvgMinifyPage() {
  const { t } = useTranslation();
  const [svgCode, setSvgCode] = useLocalStorage('svg_input', defaultSvg);
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
        title={t('Minfied SVG')}
        value={minified}
        language="svg"
        download="minified.svg"
        sx={{ flex: '1 1 50%' }}
      />
    </Box>
  );
}
