import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Button from '../../components/Button';
import Layout from '../../components/Layout';
import { Wrapper } from './slug.style';
import Image from 'next/image';
import { PreviewYoutubeLink } from '../../components/previewYoutubeLink';

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.mdx', ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.mdx'),
    'utf-8'
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};

const PostPage = ({
  frontMatter: { title, tags, thumbnailUrl, date },
  mdxSource,
}) => {
  return (
    <Layout>
      <Wrapper>
        <div className='info'>
          <div className='top'>
            <span className='tag'>{tags[0]}</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z'
              />
            </svg>
          </div>
          <h1>{title}</h1>
          <p className='date'>{date}</p>
          <Image src={thumbnailUrl} height={300} width={500} alt='thumbnail' />
          <div className='author'>
            <Image src='/avatar.jpg' height={60} width={60} alt='avatar' />
            <p>
              by{' '}
              <span>
                <a
                  href='https://twitter.com/CeldamaDev'
                  target='_blank'
                  rel='noreferrer'
                >
                  Celdama
                </a>
              </span>{' '}
              <br />
              Front End Developer
            </p>
          </div>
        </div>
        <MDXRemote
          {...mdxSource}
          components={{ Button, SyntaxHighlighter, PreviewYoutubeLink }}
        />
      </Wrapper>
    </Layout>
  );
};

export default PostPage;
