import { uiGroups, syntaxGroups, versionControlGroups } from './highlightTheme'

const novaCodeHighlighting = `
  .hljs-tag {
    color: ${uiGroups.foreground};
  }

  .hljs-literal,
  .hljs-number,
  .hljs-string,
  .hljs-meta-string {
    color: ${syntaxGroups.constant};
  }

  .hljs-attr,
  .hljs-attribute,
  .hljs-title,
  .hljs-class,
  .hljs-selector-class,
  .hljs-template-variable {
    color: ${syntaxGroups.identifier};
  }

  .hljs-name,
  .hljs-subst,
  .hljs-regexp,
  .hljs-variable,
  .hljs-bullet,
  .hljs-code,
  .hljs-formula,
  .hljs-selector-attr,
  .hljs-template-tag {
    color: ${syntaxGroups.statement};
  }

  .hljs-type {
    color: ${syntaxGroups.type};
  }

  .hljs-keyword,
  .hljs-built_in,
  .hljs-meta-keyword,
  .hljs-builtin-name,
  .hljs-selector-tag,
  .hljs-selector-id,
  .hljs-selector-pseudo {
    color: ${syntaxGroups.global};
  }

  .hljs-quote,
  .hljs-symbol,
  .hljs-meta,
  .hljs-emphasis {
    color: ${syntaxGroups.emphasis};
  }

  .hljs-function,
  .hljs-params,
  .hljs-section,
  .hljs-link {
    color: ${syntaxGroups.special};
  }

  .hljs-addition {
    color: ${versionControlGroups.added};
  }

  .hljs-deletion {
    color: ${versionControlGroups.removed};
  }

  .hljs-comment,
  .hljs-doctag {
    color: ${syntaxGroups.trivial};
  }

  .hljs-strong {
    font-weight: bold;
  }
`

export default novaCodeHighlighting
