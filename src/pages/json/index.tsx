import { Box } from '@mui/material';
import { useState } from 'react';
import Editor from 'src/components/editor';

export default function JsonPage() {
  const [code, setCode] = useState('{ "foo": "bar" }');
  return (
    <Box sx={{ bgcolor: 'grey', flex: '1 1 auto' }}>
      <Editor value={code} onChange={setCode} language="json" />
    </Box>
  );
}
