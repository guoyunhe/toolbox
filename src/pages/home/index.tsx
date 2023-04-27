import { Box, Container, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import JsonCard from '../json/JsonCard';

export default function Home() {
  const { t } = useTranslation();
  return (
    <Box py={4}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <JsonCard />
          </Grid>
          <Grid item xs={12} sm={6}>
            <JsonCard />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
