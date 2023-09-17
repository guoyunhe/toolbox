import { Upload as UploadIcon } from '@mui/icons-material';
import { Button, ButtonProps } from '@mui/material';
import { ChangeEventHandler } from 'react';
import { useTranslation } from 'react-i18next';

export interface UploadButtonProps extends ButtonProps {
  accept?: string;
  onUpload: (code: string) => void;
}

export default function UploadButton({ onUpload, accept, children, ...props }: UploadButtonProps) {
  const { t } = useTranslation();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsText(file, 'utf-8');
      reader.onload = function (evt) {
        onUpload((evt.target?.result as string) || '');
      };
    }
  };

  return (
    <Button startIcon={<UploadIcon />} component="label" {...props}>
      {children || t('Upload')}
      <input type="file" onChange={handleChange} accept={accept} hidden />
    </Button>
  );
}
