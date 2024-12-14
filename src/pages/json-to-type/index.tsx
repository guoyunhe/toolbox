import { useLocalStorage } from '@guoyunhe/react-storage';
import { Box, FormControlLabel, Stack, Switch } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import useJsonParse from '~/hooks/use-json-parse';
import Editor from '../../components/editor';
import TypeView from './TypeView';
import placeholder from './placeholder.json?raw';

export default function JsonPage() {
  const { t } = useTranslation();
  const [code, setCode] = useState(placeholder);
  const [deepParse, setDeepParse] = useLocalStorage('json_deep_parse', true);
  const data = useJsonParse({ code, deepParse });

  return (
    <Box sx={{ flex: '1 1 auto', display: 'flex', overflow: 'hidden' }}>
      <Box sx={{ flex: '1 1 50%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <Editor
          title={t('Input')}
          value={code}
          onChange={setCode}
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
        <TypeView data={data} style={{ flex: '1 1 auto' }} />
      </Box>
    </Box>
  );
}
