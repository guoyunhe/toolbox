import { FormControlLabel, Stack, Switch } from '@mui/material';
import { Options } from 'quicktype-core';
import { CSSProperties, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Editor from 'src/components/editor';
import jsonToType from './jsonToType';

export interface TypeViewProps {
  data: any;
  style?: CSSProperties;
}

export default function TypeView({ data, style }: TypeViewProps) {
  const { t } = useTranslation('json');

  // QuickType options
  const [options, setOptions] = useState<Partial<Options>>({
    alphabetizeProperties: false,
    allPropertiesOptional: false,
    indentation: '  ',
    leadingComments: ["Generated by Guo Yunhe's Toolbox"],
    rendererOptions: {
      'just-types': true as any,
      'prefer-unions': false as any,
    },
  });

  const [code, setCode] = useState('');

  useEffect(() => {
    const samples = Array.isArray(data)
      ? data.map((item) => JSON.stringify(item))
      : [JSON.stringify(data)];
    jsonToType(samples, options).then(({ lines }) => {
      setCode(lines.join('\n'));
    });
  }, [data, options]);

  return (
    <>
      <Editor language="typescript" code={code} disabled style={style} />
      <Stack direction="row">
        <FormControlLabel
          control={
            <Switch
              checked={options.alphabetizeProperties}
              onChange={(e, v) =>
                setOptions((prev) => ({
                  ...prev,
                  alphabetizeProperties: v,
                }))
              }
              sx={{ ml: 1 }}
            />
          }
          label={t('Sort properties')}
        />
        <FormControlLabel
          control={
            <Switch
              checked={options.allPropertiesOptional}
              onChange={(e, v) =>
                setOptions((prev) => ({
                  ...prev,
                  allPropertiesOptional: v,
                }))
              }
            />
          }
          label={t('Make all properties optional')}
        />
        <FormControlLabel
          control={
            <Switch
              checked={options.rendererOptions?.['prefer-unions'] as any}
              onChange={(e, v) =>
                setOptions((prev) => ({
                  ...prev,
                  rendererOptions: { ...prev.rendererOptions, 'prefer-unions': v as any },
                }))
              }
            />
          }
          label={t('ENUMs to unions')}
        />
      </Stack>
    </>
  );
}
