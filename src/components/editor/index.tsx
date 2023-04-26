import Highlight, { Language, defaultProps } from 'prism-react-renderer';
import darkTheme from 'prism-react-renderer/themes/nightOwl';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';
import { CSSProperties, Fragment, useCallback, useRef } from 'react';
import useColorMode from 'src/hooks/useColorMode';
import { useEditable } from 'use-editable';

export interface EditorProps {
  code: string;
  onChange?: (value: string) => void;
  language: Language;
  disabled?: boolean;
  style?: CSSProperties;
}

export default function Editor({
  code,
  onChange,
  disabled,
  language,
  style: componentStyle,
}: EditorProps) {
  const { colorMode } = useColorMode();
  const editorRef = useRef(null);

  const onEditableChange = useCallback(
    (code: string) => {
      onChange?.(code.slice(0, -1)); // fix line break issues
    },
    [onChange]
  );

  useEditable(editorRef, onEditableChange, {
    disabled,
    indentation: 2,
  });

  return (
    <Highlight
      {...defaultProps}
      code={code}
      language={language}
      theme={colorMode === 'dark' ? darkTheme : lightTheme}
    >
      {({ className, style, tokens, getTokenProps }) => (
        <pre
          className={className}
          style={{
            ...style,
            margin: 0,
            padding: 10,
            outline: 'none',
            overflow: 'auto',
            width: '100%',
            ...componentStyle,
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
        </pre>
      )}
    </Highlight>
  );
}
