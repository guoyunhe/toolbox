import { Box, Toolbar, useTheme } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import QRCode from 'react-qr-code';
import Editor from '~/components/editor';
import ToolPage from '~/components/tool-page';
import placeholder from './placeholder.txt?raw';

export default function TextToQRCodePage() {
  const { t } = useTranslation();
  const theme = useTheme();

  const [input, setInput] = useState(placeholder);

  return (
    <ToolPage title={`${t('Text')} ➡️ ${t('QR code')}`} settings={<Box />}>
      <Box sx={{ flex: '1 1 100%', display: 'flex', overflow: 'hidden', gap: 1 }}>
        <Editor
          title={t('Input')}
          value={input}
          onChange={setInput}
          language="txt"
          sx={{ flex: '1 1 50%' }}
        />
        <Box sx={{ flex: '1 1 50%', display: 'flex', flexDirection: 'column' }}>
          <Toolbar
            variant="dense"
            disableGutters
            sx={{
              px: 1,
              py: 0,
              borderBottomWidth: 1,
              borderBottomStyle: 'solid',
              borderBottomColor: theme.palette.divider,
            }}
          >
            {t('Output')}
          </Toolbar>
          <Box
            sx={{
              flex: '1 1 auto',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box sx={{ bgcolor: '#ffffff', p: 1 }}>
              <QRCode value={input} style={{ display: 'block' }} />
            </Box>
          </Box>
        </Box>
      </Box>
    </ToolPage>
  );
}
