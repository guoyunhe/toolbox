import { Shuffle } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import { shuffle } from 'fast-shuffle';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Editor from '~/components/editor';
import ToolPage from '~/components/tool-page';
import placeholder from './placeholder.txt?raw';

export default function ListShufflePage() {
  const { t } = useTranslation();
  const [input, setInput] = useState(placeholder);
  const [seed, setSeed] = useState(0);

  const output = useMemo(
    () =>
      shuffle(
        input
          .split('\n')
          .map((item) => item.trim())
          .filter(Boolean),
      ).join('\n'),
    [input, seed],
  );

  return (
    <ToolPage
      title={t('List shuffle')}
      settings={
        <Button
          variant="contained"
          startIcon={<Shuffle />}
          onClick={() => setSeed((prev) => prev + 1)}
        >
          {t('Shuffle')}
        </Button>
      }
    >
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
