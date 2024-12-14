import { Box, FormControlLabel, Switch } from '@mui/material';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Editor from '~/components/editor';
import ToolPage from '~/components/tool-page';
import jsonDeepParse from '~/utils/jsonDeepParse';
import jsonShallowParse from '~/utils/jsonShallowParse';
import placeholder from './placeholder.json?raw';

export default function JsonToUrlPage() {
  const { t } = useTranslation();
  const [input, setInput] = useState(placeholder);

  const [deepParse, setDeepParse] = useState(true);

  const output = useMemo(() => {
    const data: any = deepParse ? jsonDeepParse(input) : jsonShallowParse(input);
    const params = new URLSearchParams();
    Object.entries(data).forEach(([key, val]) => {
      params.set(key, typeof val === 'object' ? JSON.stringify(val) : String(val));
    });
    return params.toString();
  }, [input, deepParse]);

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
        </Box>
      }
    >
      <Box sx={{ flex: '1 1 auto', display: 'flex', overflow: 'hidden', gap: 1 }}>
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
          disabled
          language="txt"
          sx={{ flex: '1 1 50%' }}
        />
      </Box>
    </ToolPage>
  );
}
