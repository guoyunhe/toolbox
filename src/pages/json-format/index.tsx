import { useLocalStorage } from '@guoyunhe/react-storage';
import { Box, FormControlLabel, Stack, Switch } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Editor from '~/components/editor';
import ToolPage from '~/components/tool-page';
import useJsonParse from '~/hooks/use-json-parse';
import placeholder from './placeholder.json?raw';

export default function JsonFormatPage() {
  const { t } = useTranslation();

  const [input, setInput] = useState(placeholder);

  const [deepParse, setDeepParse] = useLocalStorage('json_format_deep_parse', true);
  const [sortKeys, setSortKeys] = useLocalStorage('json_format_sort_keys', true);

  const data = useJsonParse({ code: input, deepParse, sortKeys });

  const output = JSON.stringify(data, null, 2);

  return (
    <ToolPage
      title={t('JSON format')}
      settings={
        <Stack direction="row">
          <FormControlLabel
            control={<Switch checked={deepParse} onChange={(e, v) => setDeepParse(v)} />}
            label={t('Deep parse')}
          />
          <FormControlLabel
            control={<Switch checked={sortKeys} onChange={(e, v) => setSortKeys(v)} />}
            label={t('Sort properties')}
          />
        </Stack>
      }
    >
      <Box sx={{ flex: '1 1 100%', display: 'flex', gap: 1 }}>
        <Editor
          title={t('Input')}
          value={input}
          onChange={setInput}
          language="js"
          sx={{ flex: '1 1 auto' }}
        />
        <Editor title={t('Output')} value={output} language="js" sx={{ flex: '1 1 auto' }} />
      </Box>
    </ToolPage>
  );
}
