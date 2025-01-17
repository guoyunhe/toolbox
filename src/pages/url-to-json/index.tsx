import { useLocalStorage } from '@guoyunhe/react-storage';
import { Box, FormControlLabel, Switch } from '@mui/material';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import sortKeysFunc from 'sort-keys';
import Editor from '~/components/editor';
import ToolPage from '~/components/tool-page';
import jsonDeepParse from '~/utils/jsonDeepParse';
import placeholder from './placeholder.txt?raw';

export default function UrlToJsonPage() {
  const { t } = useTranslation();

  const [input, setInput] = useState(placeholder);

  const [deepParse, setDeepParse] = useLocalStorage('url_to_json_deep_parse', true);
  const [sortKeys, setSortKeys] = useLocalStorage('url_to_json_sort_keys', true);

  const output = useMemo(() => {
    const params = new URLSearchParams(input);
    let data: any = {};
    for (const [key, val] of params.entries()) {
      data[key] = deepParse ? jsonDeepParse(val) : val;
    }
    if (sortKeys) {
      data = sortKeysFunc(data, { deep: true });
    }
    return JSON.stringify(data, null, 2);
  }, [input, sortKeys, deepParse]);

  return (
    <ToolPage
      title="URL ➡️ JSON"
      settings={
        <Box>
          <FormControlLabel
            control={
              <Switch checked={deepParse} onChange={(e) => setDeepParse(e.target.checked)} />
            }
            label={t('Deep parse')}
          />
          <FormControlLabel
            control={<Switch checked={sortKeys} onChange={(e, v) => setSortKeys(v)} />}
            label={t('Sort properties')}
          />
        </Box>
      }
    >
      <Box sx={{ flex: '1 1 100%', display: 'flex', overflow: 'hidden', gap: 1 }}>
        <Editor
          title={t('Input')}
          value={input}
          onChange={setInput}
          language="txt"
          sx={{ flex: '1 1 50%' }}
        />
        <Editor title={t('Output')} value={output} language="js" sx={{ flex: '1 1 50%' }} />
      </Box>
    </ToolPage>
  );
}
