import { Box, LinearProgress, Paper, SxProps, Toolbar, useTheme } from '@mui/material';
import { Highlight, Language } from 'prism-react-renderer';
import { Fragment, ReactNode, useCallback, useRef } from 'react';
import { useEditable } from 'use-editable';
import DownloadButton from '../download-button';
import UploadButton from '../upload-button';

const languageMap: Record<string, Language> = {
  html: 'markup',
  svg: 'markup',
};

export interface EditorProps {
  value: string;
  onChange?: (value: string) => void;
  loading?: boolean;
  language: string;
  disabled?: boolean;
  title?: ReactNode;
  download?: string | boolean;
  upload?: boolean;
  sx?: SxProps;
}

export default function Editor({
  value: code,
  onChange,
  disabled,
  loading,
  language,
  title,
  download,
  upload,
  sx,
}: EditorProps) {
  const theme = useTheme();
  const editorRef = useRef(null);

  const onEditableChange = useCallback(
    (code: string) => {
      onChange?.(code.slice(0, -1)); // fix line break issues
    },
    [onChange],
  );

  useEditable(editorRef, onEditableChange, {
    disabled,
    indentation: 2,
  });

  return (
    <Paper
      variant="outlined"
      sx={{
        ...sx,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'stretch',
        alignItems: 'stretch',
        overflow: 'hidden',
      }}
    >
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
        <Box sx={{ ml: 1 }}>{title || language.toUpperCase()}</Box>
        <Box sx={{ flex: '1 1 auto' }} />
        {download && (
          <DownloadButton
            data={code}
            filename={typeof download === 'string' ? download : 'code.' + language}
          />
        )}
        {upload && <UploadButton value={code} onUpload={onChange} />}
      </Toolbar>
      {loading && (
        <LinearProgress
          sx={{ position: 'absolute', left: 4, top: 4, right: 4, borderRadius: 2, zIndex: 19 }}
        />
      )}
      <Highlight code={code} language={languageMap[language] || language}>
        {({ className, style, tokens, getTokenProps }) => (
          <Box
            component="pre"
            className={className}
            sx={{
              ...style,
              m: 0,
              p: 1,
              outline: 'none',
              overflow: 'auto',
              width: '100%',
              height: '100%',
              fontFamily:
                'ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace',
              fontSize: 12,
              position: 'relative',
            }}
            ref={editorRef}
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
          >
            {tokens.map((line, i) => (
              <Fragment key={i}>
                {line
                  .filter((token) => !token.empty)
                  .map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                {'\n'}
              </Fragment>
            ))}
          </Box>
        )}
      </Highlight>
    </Paper>
  );
}
