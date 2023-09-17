import { Box, SxProps, Toolbar } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Editor from '../editor';
import UploadButton from '../upload-button';

export interface SvgSourceEditorProps {
  value: string;
  onChange: (value: string) => void;
  sx?: SxProps;
}

export default function SvgSourceEditor({ value, onChange, sx }: SvgSourceEditorProps) {
  const { t } = useTranslation();
  return (
    <Box sx={sx}>
      <Toolbar variant="dense">
        <UploadButton onUpload={onChange} accept="application/svg+xml,image/svg+xml">
          {t('Upload SVG')}
        </UploadButton>
      </Toolbar>
      <Editor code={value} onChange={onChange} language="markup" />
    </Box>
  );
}
