import { useLocalStorage } from '@guoyunhe/react-storage';
import { Box, FormControlLabel, Switch } from '@mui/material';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import sortKeysFunc from 'sort-keys';
import Editor from '~/components/editor';
import ToolPage from '~/components/tool-page';
import jsonDeepParse from '~/utils/jsonDeepParse';
import jsonShallowParse from '~/utils/jsonShallowParse';
import placeholder from './placeholder.json?raw';

export default function JsonToUrlPage() {
  const { t } = useTranslation();
  const [input, setInput] = useState(placeholder);

  const [deepParse, setDeepParse] = useLocalStorage('json_to_url_deep_parse', true);
  const [sortKeys, setSortKeys] = useLocalStorage('json_to_url_sort_keys', true);

  const output = useMemo(() => {
    let data: any = deepParse ? jsonDeepParse(input) : jsonShallowParse(input);
    if (sortKeys && typeof data === 'object') {
      data = sortKeysFunc(data, { deep: true });
    }
    const params = new URLSearchParams();
    Object.entries(data).forEach(([key, val]) => {
      params.set(key, typeof val === 'object' ? JSON.stringify(val) : String(val));
    });
    return params.toString();
  }, [deepParse, input, sortKeys]);

  return (
    <ToolPage
      title="JSON ➡️ URL"
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
          language="js"
          sx={{ flex: '1 1 50%' }}
        />
        <Editor
          title={t('Output')}
          value={output}
          language="txt"
          sx={{ flex: '1 1 50%', overflow: 'hidden' }}
        />
      </Box>
    </ToolPage>
  );
}
