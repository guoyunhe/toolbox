import { Box, FormControlLabel, Switch } from '@mui/material';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Editor from '~/components/editor';
import ToolPage from '~/components/tool-page';
import jsonDeepParse from '~/utils/jsonDeepParse';
import placeholder from './placeholder.txt?raw';

export default function UrlToJsonPage() {
  const { t } = useTranslation('json');

  const [input, setInput] = useState(placeholder);

  const [deepParse, setDeepParse] = useState(true);

  const output = useMemo(() => {
    const params = new URLSearchParams(input);
    const data: any = {};
    for (const [key, val] of params.entries()) {
      data[key] = deepParse ? jsonDeepParse(val) : val;
    }
    return JSON.stringify(data, null, 2);
  }, [input, deepParse]);

  return (
    <ToolPage
      title="URL ➡️ JSON"
      settings={
        <Box>
          <FormControlLabel
            control={
              <Switch checked={deepParse} onChange={(e) => setDeepParse(e.target.checked)} />
            }
            label={t('Deep Parse')}
          />
        </Box>
      }
    >
      <Box sx={{ flex: '1 1 100%', display: 'flex', overflow: 'hidden', gap: 10 }}>
        <Editor
          title={t('Input')}
          value={input}
          onChange={setInput}
          language="txt"
          sx={{ flex: '1 1 50%' }}
        />
        <Editor
          title={t('Output')}
          value={output}
          disabled
          language="js"
          sx={{ flex: '1 1 50%' }}
        />
      </Box>
    </ToolPage>
  );
}
