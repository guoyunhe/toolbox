import { Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import DownloadButton from 'src/components/download-button';
import Editor from 'src/components/editor';

export interface ReactViewProps {
  svgCode: string;
}

export default function ReactView({ svgCode }: ReactViewProps) {
  const [reactCode, setReactCode] = useState('');
  useEffect(() => {
    fetch('https://api.react-svgr.com/api/svgr', {
      body: JSON.stringify({
        code: svgCode,
        options: {
          dimensions: true,
          icon: false,
          native: false,
          typescript: false,
          ref: false,
          memo: false,
          titleProp: false,
          descProp: false,
          expandProps: 'end',
          replaceAttrValues: {},
          svgProps: {},
          exportType: 'default',
          namedExport: 'ReactComponent',
          jsxRuntime: 'classic',
          svgo: true,
          svgoConfig: {
            plugins: [{ name: 'preset-default', params: { overrides: { removeTitle: false } } }],
          },
          prettier: true,
          prettierConfig: { semi: false },
        },
      }),
      method: 'POST',
      mode: 'cors',
      credentials: 'omit',
    })
      .then((res) => res.json())
      .then((data) => {
        setReactCode(data.output);
      });
  }, [svgCode]);
  return (
    <>
      <Editor code={reactCode} language="jsx" sx={{ flex: '1 1 auto' }} />
      <Stack direction="row" spacing={2} p={2}>
        <DownloadButton data={reactCode} filename="SvgComponent.tsx" />
      </Stack>
    </>
  );
}
