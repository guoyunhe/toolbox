import { useLocalStorage } from '@guoyunhe/react-storage';
import { FormControlLabel, Stack, Switch } from '@mui/material';
import { CSSProperties, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Editor from '../../components/editor';
import jsonToType from './jsonToType';

export interface TypeViewProps {
  data: any;
  style?: CSSProperties;
}

export default function TypeView({ data, style }: TypeViewProps) {
  const { t } = useTranslation();

  const [sortKeys, setSortKeys] = useLocalStorage('json_to_type_alphabetize_properties', false);
  const [optional, setOptional] = useLocalStorage('json_to_type_all_properties_optional', false);
  const [preferUnions, setPreferUnions] = useLocalStorage('json_to_type_prefer_unions', false);
  const [inferDateTimes, setInferDateTimes] = useLocalStorage(
    'json_to_type_infer_date_times',
    false,
  );

  const [code, setCode] = useState('');

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
      setCode(lines.join('\n'));
    });
  }, [data, sortKeys, optional, preferUnions, inferDateTimes]);

  return (
    <>
      <Editor title={t('Output')} language="typescript" value={code} disabled sx={style} />
      <Stack direction="row">
        <FormControlLabel
          control={<Switch checked={sortKeys} onChange={(e, v) => setSortKeys(v)} sx={{ ml: 1 }} />}
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
    </>
  );
}
