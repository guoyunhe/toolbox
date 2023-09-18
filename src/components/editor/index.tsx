import { Box, LinearProgress, Paper, SxProps, useTheme } from '@mui/material';
import Highlight, { Language, defaultProps } from 'prism-react-renderer';
import darkTheme from 'prism-react-renderer/themes/vsDark';
import lightTheme from 'prism-react-renderer/themes/vsLight';
import { Fragment, useCallback, useRef } from 'react';
import { useEditable } from 'use-editable';

export interface EditorProps {
  code: string;
  onChange?: (value: string) => void;
  loading?: boolean;
  language: Language;
  disabled?: boolean;
  sx?: SxProps;
}

export default function Editor({ code, onChange, disabled, loading, language, sx }: EditorProps) {
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
        justifyContent: 'stretch',
        alignItems: 'stretch',
        overflow: 'hidden',
      }}
    >
      {loading && (
        <LinearProgress
          sx={{ position: 'absolute', left: 4, top: 4, right: 4, borderRadius: 2, zIndex: 19 }}
        />
      )}
      <Highlight
        {...defaultProps}
        code={code}
        language={language}
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
