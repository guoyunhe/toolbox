import { Avatar, Box, Chip, SxProps, Toolbar } from '@mui/material';
import svgLogo from '../../images/svg-logo.svg';
import Editor from '../editor';
import UploadButton from '../upload-button';

export interface SvgSourceEditorProps {
  value: string;
  onChange: (value: string) => void;
  sx?: SxProps;
}

export default function SvgSourceEditor({ value, onChange, sx }: SvgSourceEditorProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', ...sx }}>
      <Toolbar disableGutters>
        <Chip color="warning" variant="outlined" label="SVG" avatar={<Avatar src={svgLogo} />} />
        <UploadButton onUpload={onChange} accept="application/svg+xml,image/svg+xml" />
      </Toolbar>
      <Editor code={value} onChange={onChange} language="markup" style={{ flex: '1 1 100%' }} />
    </Box>
  );
}
