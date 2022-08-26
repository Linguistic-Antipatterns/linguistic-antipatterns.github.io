import React, { useEffect } from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import vsDark from "prism-react-renderer/themes/vsDark";

/* ########################################################### */
// ##########   Load extra highlighting languages ###########
// @ts-ignore
import Prism from "prism-react-renderer/prism";
// @ts-ignore
(typeof global !== "undefined" ? global : window).Prism = Prism;
require("prismjs/components/prism-java");
require("prismjs/components/prism-kotlin");
/* ########################################################### */

type Props = {
  children: string;
  className: string;
  key?: string;
};

export const CodeBlock: React.FC<Props> = ({ children, className, key }) => {
  // TODO, unsafe cast
  const language: Language = (className?.replace(/language-/, "") ||
    "") as Language;

  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={vsDark}
      key={key}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        return (
          <pre className={className} style={{ ...style }}>
            {tokens.map((line, index) => {
              const lineProps = getLineProps({ line, key: index });
              return (
                <div key={index} {...lineProps}>
                  {line.map((token, key) =>
                    // Remove last line if it's just a \n
                    key === line.length - 1 && token.content === "\n" ? (
                      <></>
                    ) : (
                      <span key={key} {...getTokenProps({ token, key })} />
                    )
                  )}
                </div>
              );
            })}
          </pre>
        );
      }}
    </Highlight>
  );
};
