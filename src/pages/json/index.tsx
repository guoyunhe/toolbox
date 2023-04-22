import { Box, Tab, Tabs } from '@mui/material';
import JSON5 from 'json5';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { JSONTree } from 'react-json-tree';
import Editor from 'src/components/editor';
import useColorMode from 'src/hooks/useColorMode';

const placeholder = `// comments are supported
{
  "foo": "bar",
  "nested": "{\\"foo\\":\\"bar\\"}",
  "count": 123,
  "success": true,
  "status": null
}`;

const lightTheme = {
  base00: '#fbfbfb', // background
  base01: '#383830',
  base02: '#49483e',
  base03: '#989fb1', // object/array desc
  base04: '#a59f85',
  base05: '#f8f8f2',
  base06: '#f5f4f1',
  base07: '#f9f8f5',
  base08: '#0c969b', // null
  base09: '#aa0982', // number, boolean
  base0A: '#f4bf75',
  base0B: '#4876d6', // string
  base0C: '#a1efe4',
  base0D: '#0c969b', // key
  base0E: '#ae81ff',
  base0F: '#cc6633',
};

const darkTheme = {
  base00: '#011627', // background
  base01: '#383830',
  base02: '#49483e',
  base03: '#637777', // object/array desc
  base04: '#a59f85',
  base05: '#f8f8f2',
  base06: '#f5f4f1',
  base07: '#f9f8f5',
  base08: '#7fdbca', // null
  base09: '#f78c6c', // number, boolean
  base0A: '#f4bf75',
  base0B: '#addb67', // string
  base0C: '#a1efe4',
  base0D: '#80cbc4', // key
  base0E: '#ae81ff',
  base0F: '#cc6633',
};

export default function JsonPage() {
  const { colorMode } = useColorMode();
  const { t } = useTranslation();
  const [code, setCode] = useState(placeholder);

  const data = useMemo(() => {
    try {
      return JSON5.parse(code, (key, value) => {
        try {
          return JSON5.parse(value);
        } catch {
          return value;
        }
      });
    } catch (e) {
      return {};
    }
  }, [code]);

  return (
    <Box sx={{ flex: '1 1 auto', display: 'flex' }}>
      <Box sx={{ flex: '1 1 50%', display: 'flex', flexDirection: 'column' }}>
        <Tabs value={1}>
          <Tab label={t('Input')} value={1} />
        </Tabs>
        <Editor value={code} onChange={setCode} language="json" style={{ flex: '1 1 auto' }} />
      </Box>
      <Box width={10} />
      <Box sx={{ flex: '1 1 50%', display: 'flex', flexDirection: 'column' }}>
        <Tabs value={1}>
          <Tab label={t('Parsed')} value={1} />
        </Tabs>
        <JSONTree
          data={data}
          theme={colorMode === 'light' ? lightTheme : darkTheme}
          hideRoot
          sortObjectKeys
        />
      </Box>
    </Box>
  );
}
