import { useLocalStorage } from '@guoyunhe/react-storage';
import { Box, FormControlLabel, Stack, Switch } from '@mui/material';
import { flatten } from 'flat';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Editor from '~/components/editor';
import ToolPage from '~/components/tool-page';
import useJsonParse from '~/hooks/use-json-parse';
import placeholder from './placeholder.txt?raw';

export default function UrlToJsonPage() {
  const { t } = useTranslation('json');
  const [input, setInput] = useState(placeholder);
  const [deepParse, setDeepParse] = useLocalStorage('json_deep_parse', true);
  const [sortKeys, setSortKeys] = useLocalStorage('json_sort_keys', true);
  const data = useJsonParse({ code: input, deepParse, sortKeys });
  const output = JSON.stringify(flatten(data), null, 2);

  return (
    <ToolPage title={t('URL ➡️ JSON')}>
      <Box sx={{ flex: '1 1 auto', display: 'flex', overflow: 'hidden' }}>
        <Box sx={{ flex: '1 1 50%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <Editor
            title={t('Input')}
            value={input}
            onChange={setInput}
            language="js"
            sx={{ flex: '1 1 auto' }}
          />
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
          <Editor
            title={t('Output')}
            value={output}
            disabled
            language="js"
            sx={{ flex: '1 1 auto' }}
          />
          <Stack direction="row">
            <FormControlLabel
              control={
                <Switch checked={sortKeys} onChange={(e, v) => setSortKeys(v)} sx={{ ml: 1 }} />
              }
              label={t('Sort properties')}
            />
          </Stack>
        </Box>
      </Box>
    </ToolPage>
  );
}
