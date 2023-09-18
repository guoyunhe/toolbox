import { Box, LinearProgress, Paper, SxProps, Toolbar, useTheme } from '@mui/material';
import Highlight, { Language, defaultProps } from 'prism-react-renderer';
import darkTheme from 'prism-react-renderer/themes/vsDark';
import lightTheme from 'prism-react-renderer/themes/vsLight';
import { Fragment, ReactNode, useCallback, useRef } from 'react';
import { useEditable } from 'use-editable';
import jsonLogo from '../../images/json-logo.svg';
import svgLogo from '../../images/svg-logo.svg';
import DownloadButton from '../download-button';
import UploadButton from '../upload-button';

const languageMap: Record<string, { language: Language; logo: string }> = {
  svg: {
    language: 'markup',
    logo: svgLogo,
  },
  json: {
    language: 'json',
    logo: jsonLogo,
  },
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
      <Toolbar variant="dense" disableGutters sx={{ px: 1, py: 0 }}>
        <Box component="img" src={languageMap[language]?.logo} sx={{ width: 24, height: 24 }} />
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
      <Highlight
        {...defaultProps}
        code={code}
        language={languageMap[language]?.language}
        theme={theme.palette.mode === 'dark' ? darkTheme : lightTheme}
      >
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
