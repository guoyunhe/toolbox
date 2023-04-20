import { Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function AboutPage() {
  const { t } = useTranslation('about');
  return (
    <Container maxWidth="sm">
      <Typography variant="h1">{t('About', { ns: 'translation' })}</Typography>
      <Typography variant="body1">
        {t('This toolbox is made by and for Guo Yunhe, a web developer and Linux user.')}
      </Typography>
    </Container>
  );
}
