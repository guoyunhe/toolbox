import { Box } from '@mui/material';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Editor from '~/components/editor';
import ToolPage from '~/components/tool-page';
import placeholder from './placeholder.txt?raw';

export default function Base64DecodePage() {
  const { t } = useTranslation();
  const [input, setInput] = useState(placeholder);

  const output = useMemo(() => {
    const binString = atob(input.trim());
    const bytes = Uint8Array.from(binString, (m) => m.codePointAt(0)!);
    return new TextDecoder().decode(bytes);
  }, [input]);

  return (
    <ToolPage title={t('Base64 decode')}>
      <Box sx={{ flex: '1 1 auto', display: 'flex', gap: 1, overflow: 'hidden' }}>
        <Editor
          title={t('Input')}
          value={input}
          onChange={setInput}
          language="txt"
          upload
          sx={{ flex: '1 1 50%' }}
        />
        <Editor
          title={t('Output')}
          value={output}
          language="txt"
          download
          sx={{ flex: '1 1 50%' }}
        />
      </Box>
    </ToolPage>
  );
}
