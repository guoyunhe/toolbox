import { useLocalStorage } from '@guoyunhe/react-storage';
import { FormControlLabel, Stack, Switch, Toolbar, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { JSONTree } from 'react-json-tree';

const lightTheme = {
  base00: '#fbfbfb', // background
  base01: '#383830',
  base02: '#49483e',
  base03: '#989fb1', // object/array desc
  base04: '#a59f85',
  base05: '#f8f8f2',
  base06: '#f5f4f1',
  base07: '#f9f8f5',
  base08: '#0c969b', // null
  base09: '#aa0982', // number, boolean
  base0A: '#f4bf75',
  base0B: '#4876d6', // string
  base0C: '#a1efe4',
  base0D: '#0c969b', // key
  base0E: '#ae81ff',
  base0F: '#cc6633',
  tree: {
    margin: 0,
    flex: '1 1 auto',
    overflow: 'auto',
    fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace',
    fontSize: 14,
  },
};

const darkTheme = {
  base00: '#1e1e1e', // background
  base01: '#383830',
  base02: '#49483e',
  base03: 'rgb(106, 153, 85)', // object/array desc expanded
  base04: '#a59f85',
  base05: '#f8f8f2',
  base06: '#f5f4f1',
  base07: '#f9f8f5',
  base08: 'rgb(86, 156, 214)', // null
  base09: 'rgb(181, 206, 168)', // number, boolean
  base0A: '#f4bf75',
  base0B: 'rgb(206, 145, 120)', // string
  base0C: '#a1efe4',
  base0D: '#9cdcfe', // key
  base0E: '#ae81ff',
  base0F: '#cc6633',
  tree: {
    margin: 0,
    flex: '1 1 auto',
    overflow: 'auto',
    fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace',
    fontSize: 12,
  },
};

export interface TreeViewProps {
  data: any;
}

export default function TreeView({ data }: TreeViewProps) {
  const theme = useTheme();
  const { t } = useTranslation('json');
  const [sortKeys, setSortKeys] = useLocalStorage('json_tree_sort_keys', false);

  return (
    <>
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
      <JSONTree
        data={data}
        theme={theme.palette.mode === 'light' ? lightTheme : darkTheme}
        hideRoot
        sortObjectKeys={sortKeys}
      />
      <Stack direction="row">
        <FormControlLabel
          control={<Switch checked={sortKeys} onChange={(e, v) => setSortKeys(v)} sx={{ ml: 1 }} />}
          label={t('Sort properties')}
        />
      </Stack>
    </>
  );
}
