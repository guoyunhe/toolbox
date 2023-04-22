import Highlight, { Language, defaultProps } from 'prism-react-renderer';
import darkTheme from 'prism-react-renderer/themes/nightOwl';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';
import { Fragment, useCallback, useRef } from 'react';
import useColorMode from 'src/hooks/useColorMode';
import { useEditable } from 'use-editable';

export interface EditorProps {
  value: string;
  onChange: (value: string) => void;
  language: Language;
}

export default function Editor({ value, onChange, language }: EditorProps) {
  const { colorMode } = useColorMode();
  const editorRef = useRef(null);

  const onEditableChange = useCallback(
    (code: string) => {
      onChange(code.slice(0, -1)); // fix line break issues
    },
    [onChange]
  );

  useEditable(editorRef, onEditableChange, {
    disabled: false,
    indentation: 2,
  });

  return (
    <Highlight
      {...defaultProps}
      code={value}
      language={language}
      theme={colorMode === 'dark' ? darkTheme : lightTheme}
    >
      {({ className, style, tokens, getTokenProps }) => (
        <pre
          className={className}
          style={{ ...style, margin: 0, padding: 10, outline: 'none' }}
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
        </pre>
      )}
    </Highlight>
  );
}
