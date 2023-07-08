import ReactMarkdown from 'react-markdown';
import remarkDirective from 'remark-directive';
import { visit } from 'unist-util-visit';
import { Node } from 'unist';
import { Paragraph, ParagraphProps } from './renderers/Paragraph';
import { Heading, HeadingProps } from './renderers/Heading';
import Image from 'next/image';
import { markdownToVimeo } from './renderers/Vimeo';

interface Hast {
  node: Object;
}

const TransformHeading = ({ node, ...props }: Hast & HeadingProps) => <Heading {...props} />;

const components = {
  p: (paragraph: { children?: boolean, node?: any }) => {
    const { node } = paragraph;
    if (node.children[0].tagName === 'img') {
      const image = node.children[0];
      const metastring = image.properties.alt;
      const alt = metastring?.replace(/ *\{[^)]*\} */g, '');
      const metaWidth = metastring.match(/{([^}]+)x/);
      const metaHeight = metastring.match(/x([^}]+)}/);
      const width = metaWidth ? metaWidth[1] : '768';
      const height = metaHeight ? metaHeight[1] : '432';
      const isPriority = metastring?.toLowerCase().match('{priority}');
      const hasCaption = metastring?.toLowerCase().includes('{caption:');
      const caption = metastring?.match(/{caption: (.*?)}/)?.pop();

      return (
        <div className='post-image-wrapper'>
          <Image
            src={image.properties.src}
            width={width}
            height={height}
            className='post-image'
            alt={alt}
            priority={isPriority}
          />
          {hasCaption ? <div className='caption' aria-label={caption}>{caption}</div> : null}
        </div>
      );

    }
    return <Paragraph>{paragraph.children}</Paragraph>
  },
  h1: TransformHeading,
  h2: TransformHeading,
  h3: TransformHeading,
  h4: TransformHeading,
  h5: TransformHeading,
  h6: TransformHeading,
  vimeo: ({ node, ...props }: any) => markdownToVimeo(props),
}


interface Props {
  markdown: string | undefined;
}

const Markdown = ({ markdown }: Props) => {
  return (
    <ReactMarkdown
      className={''}
      remarkPlugins={[
        remarkDirective, customTag,
      ]}
      components={components as any}
    >
      {markdown ?? ''}
    </ReactMarkdown>
  );
}

const customTagNames = ['vimeo'];

const customTag = () => {
  return (tree: Node) => {
    const visitor = (node: any) => {
      if (!customTagNames.includes(node.name)) return;
      const data = node.data || (node.data = {});
      data.hName = node.name;
      data.hProperties = { ...node.attributes }
    }
    visit(tree, ['containerDirective'], visitor);
  }
}

export default Markdown;
