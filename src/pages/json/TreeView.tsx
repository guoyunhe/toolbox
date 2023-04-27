import { JSONTree } from 'react-json-tree';
import useColorMode from 'src/hooks/useColorMode';

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
  },
};

const darkTheme = {
  base00: '#011627', // background
  base01: '#383830',
  base02: '#49483e',
  base03: '#637777', // object/array desc
  base04: '#a59f85',
  base05: '#f8f8f2',
  base06: '#f5f4f1',
  base07: '#f9f8f5',
  base08: '#7fdbca', // null
  base09: '#f78c6c', // number, boolean
  base0A: '#f4bf75',
  base0B: '#addb67', // string
  base0C: '#a1efe4',
  base0D: '#80cbc4', // key
  base0E: '#ae81ff',
  base0F: '#cc6633',
  tree: {
    margin: 0,
    flex: '1 1 auto',
    overflow: 'auto',
  },
};

export interface TreeViewProps {
  data: any;
}

export default function TreeView({ data }: TreeViewProps) {
  const { colorMode } = useColorMode();

  return (
    <JSONTree
      data={data}
      theme={colorMode === 'light' ? lightTheme : darkTheme}
      hideRoot
      sortObjectKeys
    />
  );
}
