import { Alert, Box, Stack, Table, TableBody, TableCell, TableRow, TextField } from '@mui/material';
import Color from 'color';
import colors from 'color-name';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ColorPreview from './ColorPreview';

export default function ColorPage() {
  const { t } = useTranslation();
  const [code, setCode] = useState('#ff0000');
  const color = useMemo(() => {
    try {
      return Color(code);
    } catch (e) {
      return null;
    }
  }, [code]);
  const name = useMemo(
    () =>
      Object.keys(colors).find(
        (key) => (colors as any)[key]?.join() === color?.rgb().array().join(),
      ),
    [color],
  );
  return (
    <Box>
      <Stack direction="row" spacing={2} p={2}>
        <TextField
          label={t('Color')}
          helperText={t('Support name, hex, rgba, hsl, cmyk')}
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
      </Stack>
      {color ? (
        <Box>
          <ColorPreview color={color} />
          <Table>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  CSS Name
                </TableCell>
                <TableCell>{name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  HEX
                </TableCell>
                <TableCell>{color.hex()}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  RGB
                </TableCell>
                <TableCell>rgb({color.rgb().array().join(', ')})</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  HSL
                </TableCell>
                <TableCell>hsl{color.hsl().array().join(', ')})</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  CMYK
                </TableCell>
                <TableCell>{color.cmyk().array().join(', ')}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      ) : (
        <Alert color="error">{t('Invalid color!')}</Alert>
      )}
    </Box>
  );
}
