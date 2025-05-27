import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import type { TMarkdownProps } from './types';
import H1 from './components/h1';
import P from './components/p';
import A from './components/a';

function Markdown({ content }: TMarkdownProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{ h1: H1, p: P, a: A }}
    >
      {content}
    </ReactMarkdown>
  );
}

export default Markdown;
