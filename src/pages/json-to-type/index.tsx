import { useLocalStorage } from '@guoyunhe/react-storage';
import { Box, FormControlLabel, Stack, Switch } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ToolPage from '~/components/tool-page';
import useJsonParse from '~/hooks/use-json-parse';
import Editor from '../../components/editor';
import jsonToType from './jsonToType';
import placeholder from './placeholder.json?raw';

export default function JsonPage() {
  const { t } = useTranslation();
  const [input, setInput] = useState(placeholder);

  const [deepParse, setDeepParse] = useLocalStorage('json_deep_parse', true);
  const [sortKeys, setSortKeys] = useLocalStorage('json_to_type_alphabetize_properties', false);
  const [optional, setOptional] = useLocalStorage('json_to_type_all_properties_optional', false);
  const [preferUnions, setPreferUnions] = useLocalStorage('json_to_type_prefer_unions', false);
  const [inferDateTimes, setInferDateTimes] = useLocalStorage(
    'json_to_type_infer_date_times',
    false,
  );

  const data = useJsonParse({ code: input, deepParse });

  const [output, setOutput] = useState('');

  useEffect(() => {
    const samples = Array.isArray(data)
      ? data.map((item) => JSON.stringify(item))
      : [JSON.stringify(data)];
    jsonToType(samples, {
      alphabetizeProperties: sortKeys,
      allPropertiesOptional: optional,
      inferDateTimes,
      indentation: '  ',
      rendererOptions: {
        'just-types': true,
        'prefer-unions': preferUnions,
      },
    }).then(({ lines }) => {
      setOutput(lines.join('\n'));
    });
  }, [data, sortKeys, optional, preferUnions, inferDateTimes]);

  return (
    <ToolPage
      title="JSON ➡️ TypeScript"
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
          <FormControlLabel
            control={<Switch checked={optional} onChange={(e, v) => setOptional(v)} />}
            label={t('Make all properties optional')}
          />
          <FormControlLabel
            control={<Switch checked={preferUnions} onChange={(e, v) => setPreferUnions(v)} />}
            label={t('ENUMs to unions')}
          />
          <FormControlLabel
            control={<Switch checked={inferDateTimes} onChange={(e, v) => setInferDateTimes(v)} />}
            label={t('Infer date/time')}
          />
        </Stack>
      }
    >
      <Box sx={{ flex: '1 1 auto', display: 'flex', gap: 1, overflow: 'hidden' }}>
        <Editor
          title={t('Input')}
          value={input}
          onChange={setInput}
          language="js"
          sx={{ flex: '1 1 50%' }}
        />
        <Editor title={t('Output')} value={output} language="ts" sx={{ flex: '1 1 50%' }} />
      </Box>
    </ToolPage>
  );
}
