import { Box, Tab, Tabs } from '@mui/material';
import JSON5 from 'json5';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Editor from 'src/components/editor';
import TreeView from './TreeView';
import TypeView from './TypeView';

import placeholder from './placeholder.jsonc?raw';

export default function JsonPage() {
  const { t } = useTranslation('json');
  const [code, setCode] = useState(placeholder);
  const [tab, setTab] = useState(1);

  const data = useMemo(() => {
    try {
      return JSON5.parse(code, (key, value) => {
        try {
          return JSON5.parse(value);
        } catch {
          return value;
        }
      });
    } catch (e) {
      return {};
    }
  }, [code]);

  return (
    <Box sx={{ flex: '1 1 auto', display: 'flex', overflow: 'hidden' }}>
      <Box sx={{ flex: '1 1 50%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <Tabs value={1}>
          <Tab label={t('Input')} value={1} />
        </Tabs>
        <Editor code={code} onChange={setCode} language="json" style={{ flex: '1 1 auto' }} />
      </Box>
      <Box width={10} />
      <Box sx={{ flex: '1 1 50%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <Tabs value={tab} onChange={(e, v) => setTab(v)}>
          <Tab label={t('Tree')} value={1} />
          <Tab label="TypeScript" value={2} />
        </Tabs>
        {tab === 1 && <TreeView data={data} />}
        {tab === 2 && <TypeView data={data} style={{ flex: '1 1 auto' }} />}
      </Box>
    </Box>
  );
}
