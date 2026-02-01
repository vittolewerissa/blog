const style = {
  'code[class*="language-"]': {
    MozTabSize: '2',
    OTabSize: '2',
    tabSize: '2',
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none',
    whiteSpace: 'pre-wrap',
    wordWrap: 'normal',
    // fontFamily: 'Menlo, Monaco, "Courier New", monospace',
    // fontSize: '14px',
    color: '#2C2420',
    textShadow: 'none',
  },
  'pre[class*="language-"]': {
    MozTabSize: '2',
    OTabSize: '2',
    tabSize: '2',
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none',
    whiteSpace: 'pre-wrap',
    wordWrap: 'normal',
    // fontFamily: 'Menlo, Monaco, "Courier New", monospace',
    // fontSize: '14px',
    color: '#2C2420',
    textShadow: 'none',
    background: '#F5F0E8',
    padding: '15px',
    borderRadius: '12px',
    border: '1px solid #E8E0D4',
    overflow: 'auto',
    position: 'relative',
  },
  'pre > code[class*="language-"]': {
    fontSize: '1em',
  },
  ':not(pre) > code[class*="language-"]': {
    background: '#F5F0E8',
    padding: '0.15em 0.2em 0.05em',
    borderRadius: '.35em',
    border: '1px solid #E8E0D4',
  },
  'pre[class*="language-"] code': {
    whiteSpace: 'pre',
    display: 'block',
  },
  namespace: {
    Opacity: '.7',
  },
  comment: {
    color: '#9A8F85',
  },
  prolog: {
    color: '#9A8F85',
  },
  doctype: {
    color: '#9A8F85',
  },
  cdata: {
    color: '#9A8F85',
  },
  operator: {
    color: '#8B4557',
  },
  boolean: {
    color: '#8B4557',
  },
  number: {
    color: '#8B4557',
  },
  'attr-name': {
    color: '#6B5E53',
  },
  string: {
    color: '#6B5E53',
  },
  entity: {
    color: '#6B5E53',
    cursor: 'help',
  },
  url: {
    color: '#6B5E53',
  },
  '.language-css .token.string': {
    color: '#6B5E53',
  },
  '.style .token.string': {
    color: '#e6d06c',
  },
  selector: {
    color: '#2C2420',
  },
  inserted: {
    color: '#2C2420',
  },
  atrule: {
    color: '#8B4557',
  },
  'attr-value': {
    color: '#8B4557',
  },
  keyword: {
    color: '#8B4557',
  },
  important: {
    color: '#8B4557',
    fontWeight: 'bold',
  },
  deleted: {
    color: '#8B4557',
  },
  regex: {
    color: '#2C2420',
  },
  statement: {
    color: '#2C2420',
    fontWeight: 'bold',
  },
  placeholder: {
    color: '#2C2420',
  },
  variable: {
    color: '#2C2420',
  },
  bold: {
    fontWeight: 'bold',
  },
  punctuation: {
    color: '#6B5E53',
  },
  italic: {
    fontStyle: 'italic',
  },
  'code.language-markup': {
    color: '#2C2420',
  },
  'code.language-markup .token.tag': {
    color: '#8B4557',
  },
  'code.language-markup .token.attr-name': {
    color: '#2C2420',
  },
  'code.language-markup .token.attr-value': {
    color: '#6B5E53',
  },
  'code.language-markup .token.style': {
    color: '#2C2420',
  },
  'code.language-markup .token.script': {
    color: '#2C2420',
  },
  'code.language-markup .token.script .token.keyword': {
    color: '#76d9e6',
  },
  'pre[class*="language-"][data-line]': {
    position: 'relative',
    padding: '1em 0 1em 3em',
  },
  'pre[data-line] .line-highlight': {
    position: 'absolute',
    left: '0',
    right: '0',
    padding: '0',
    marginTop: '1em',
    background: 'rgba(139, 69, 87, 0.08)',
    pointerEvents: 'none',
    lineHeight: 'inherit',
    whiteSpace: 'pre',
  },
  'pre[data-line] .line-highlight:before': {
    content: 'attr(data-start)',
    position: 'absolute',
    top: '.4em',
    left: '.6em',
    minWidth: '1em',
    padding: '0.2em 0.5em',
    backgroundColor: 'rgba(139, 69, 87, 0.22)',
    color: '#2C2420',
    font: 'bold 65%/1 sans-serif',
    height: '1em',
    lineHeight: '1em',
    textAlign: 'center',
    borderRadius: '999px',
    textShadow: 'none',
    boxShadow: '0 1px 1px rgba(139, 69, 87, 0.2)',
  },
  'pre[data-line] .line-highlight[data-end]:after': {
    content: 'attr(data-end)',
    position: 'absolute',
    top: 'auto',
    left: '.6em',
    minWidth: '1em',
    padding: '0.2em 0.5em',
    backgroundColor: 'rgba(139, 69, 87, 0.22)',
    color: '#2C2420',
    font: 'bold 65%/1 sans-serif',
    height: '1em',
    lineHeight: '1em',
    textAlign: 'center',
    borderRadius: '999px',
    textShadow: 'none',
    boxShadow: '0 1px 1px rgba(139, 69, 87, 0.2)',
    bottom: '.4em',
  },
};

export default style;
