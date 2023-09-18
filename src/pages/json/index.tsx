import { Box, FormControlLabel, Stack, Switch, Tab, Tabs } from '@mui/material';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Editor from '../../components/editor';
import TreeView from './TreeView';
import TypeView from './TypeView';

import { useLocalStorage } from '@guoyunhe/react-storage';
import placeholder from './placeholder.jsonc?raw';
import jsonDeepParse from './utils/jsonDeepParse';
import jsonShallowParse from './utils/jsonShallowParse';

export default function JsonPage() {
  const { t } = useTranslation('json');
  const [code, setCode] = useState(placeholder);
  const [tab, setTab] = useState(1);
  const [deepParse, setDeepParse] = useLocalStorage('json_deep_parse', true);

  const data = useMemo(() => {
    try {
      if (deepParse) {
        return jsonDeepParse(code);
      } else {
        return jsonShallowParse(code);
      }
    } catch (e) {
      return {};
    }
  }, [code, deepParse]);

  return (
    <Box sx={{ flex: '1 1 auto', display: 'flex', overflow: 'hidden' }}>
      <Box sx={{ flex: '1 1 50%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <Tabs value={1}>
          <Tab label={t('Input')} value={1} />
        </Tabs>
        <Editor code={code} onChange={setCode} language="json" sx={{ flex: '1 1 auto' }} />
        <Stack direction="row">
          <FormControlLabel
            control={
              <Switch checked={deepParse} onChange={(e, v) => setDeepParse(v)} sx={{ ml: 1 }} />
            }
            label={t('Deep parse')}
          />
        </Stack>
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
