import { Download as DownloadIcon } from '@mui/icons-material';
import { Button, ButtonProps } from '@mui/material';
import { useTranslation } from 'react-i18next';
import byteSize from '~/utils/byteSize';

export interface DownloadButtonProps extends ButtonProps {
  data: string;
  filename: string;
}

export default function DownloadButton({ data, filename, ...props }: DownloadButtonProps) {
  const { t } = useTranslation();
  const handleClick = () => {
    const pom = document.createElement('a');
    pom.setAttribute('href', `data:text/plain;charset=utf-8,${encodeURIComponent(data)}`);
    pom.setAttribute('download', filename);
    pom.click();
  };
  return (
    <Button startIcon={<DownloadIcon />} onClick={handleClick} {...props}>
      {t('Download')} ({byteSize(data)})
    </Button>
  );
}
