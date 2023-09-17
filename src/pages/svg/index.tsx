import { Box, Stack, Tab, Tabs } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import DownloadButton from 'src/components/download-button';
import Editor from 'src/components/editor';
import UploadButton from 'src/components/upload-button';
import byteSize from 'src/utils/byteSize';
import { optimize } from 'svgo';
import ReactView from './ReactView';

export default function SvgPage() {
  const { t } = useTranslation('json');
  const [code, setCode] = useState('');
  const [tab, setTab] = useState(1);
  const [minified, setMinified] = useState('');

  useEffect(() => {
    const result = optimize(code, {});
    setMinified(result.data);
  }, [code]);

  return (
    <Box sx={{ flex: '1 1 auto', display: 'flex', overflow: 'hidden' }}>
      <Box sx={{ flex: '1 1 50%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <Tabs value={1}>
          <Tab label={t('Input')} value={1} />
        </Tabs>
        <Editor code={code} onChange={setCode} language="markup" style={{ flex: '1 1 auto' }} />
        <Stack direction="row" spacing={2} p={2}>
          <UploadButton onUpload={(c) => setCode(c)} accept="application/svg+xml,image/svg+xml">
            {t('Upload SVG')}
          </UploadButton>
          <Box flexGrow={1} />
          <Box>{byteSize(code)}</Box>
        </Stack>
      </Box>
      <Box width={10} />
      <Box sx={{ flex: '1 1 50%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <Tabs value={tab} onChange={(e, v) => setTab(v)}>
          <Tab label={t('Minify')} value={1} />
          <Tab label="React" value={2} />
        </Tabs>
        {tab === 1 && (
          <>
            <Editor code={minified} language="markup" style={{ flex: '1 1 auto' }} />
            <Stack direction="row" spacing={2} p={2}>
              <DownloadButton data={minified} filename="minified.svg" />
            </Stack>
          </>
        )}
        {tab === 2 && <ReactView svgCode={code} />}
      </Box>
    </Box>
  );
}
