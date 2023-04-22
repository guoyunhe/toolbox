import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Editor from 'src/components/editor';

const placeholder = `// comments are supported
{
  "foo": "bar",
  "nested": "{\\"foo\\":\\"bar\\"}"
}`;

export default function JsonPage() {
  const { t } = useTranslation();
  const [code, setCode] = useState(placeholder);
  return (
    <Box sx={{ flex: '1 1 auto', display: 'flex' }}>
      <Box sx={{ flex: '1 1 50%', display: 'flex', flexDirection: 'column' }}>
        <Tabs value={1}>
          <Tab label={t('Input')} value={1} />
        </Tabs>
        <Editor value={code} onChange={setCode} language="json" style={{ flex: '1 1 auto' }} />
      </Box>
      <Box width={20} />
      <Box sx={{ flex: '1 1 50%', display: 'flex', flexDirection: 'column' }}>
        <Tabs value={1}>
          <Tab label={t('Formatted')} value={1} />
        </Tabs>
        <Editor value={code} language="json" style={{ flex: '1 1 auto' }} />
      </Box>
    </Box>
  );
}
