import { Upload } from '@mui/icons-material';
import { Box, Button, Stack, Tab, Tabs } from '@mui/material';
import { ChangeEventHandler, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Editor from 'src/components/editor';
import jsonDeepParse from '../json/utils/jsonDeepParse';
import jsonShallowParse from '../json/utils/jsonShallowParse';

export default function SvgPage() {
  const { t } = useTranslation('json');
  const [code, setCode] = useState('');
  const [tab, setTab] = useState(1);

  const minified = useMemo(() => {
    try {
      if (deepParse) {
        return jsonDeepParse(code);
      } else {
        return jsonShallowParse(code);
      }
    } catch (e) {
      return {};
    }
  }, [code]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsText(file, 'utf-8');
      reader.onload = function (evt) {
        setCode(evt.target?.result as string);
      };
      reader.onerror = function (evt) {
        // TODO alert error
      };
    }
  };

  return (
    <Box sx={{ flex: '1 1 auto', display: 'flex', overflow: 'hidden' }}>
      <Box sx={{ flex: '1 1 50%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <Tabs value={1}>
          <Tab label={t('Input')} value={1} />
        </Tabs>
        <Editor code={code} onChange={setCode} language="markup" style={{ flex: '1 1 auto' }} />
        <Stack direction="row" spacing={2} p={2}>
          <Button variant="contained" startIcon={<Upload />} component="label">
            {t('Upload SVG')}
            <input
              type="file"
              onChange={handleChange}
              accept="application/svg+xml,image/svg+xml"
              hidden
            />
          </Button>
        </Stack>
      </Box>
      <Box width={10} />
      <Box sx={{ flex: '1 1 50%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <Tabs value={tab} onChange={(e, v) => setTab(v)}>
          <Tab label={t('Minify')} value={1} />
          <Tab label="React" value={2} />
        </Tabs>
        {tab === 1 && <div />}
        {tab === 2 && <div />}
      </Box>
    </Box>
  );
}
