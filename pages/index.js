import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Layout from '../components/Layout';
import Post from '../components/Post';
import { HotPost } from '../components/HotPost';
import { Categories } from '../components/Categories';

export default function Home({ posts }) {
  const hotPost = posts[0];

  return (
    <Layout>
      <HotPost hotPost={hotPost} />
      <Categories />
      <div className='container'>
        {posts.map((post, index) => (
          <Post key={index} post={post} index={index} />
        ))}
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'));
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    );
    const { data: frontMatter } = matter(markdownWithMeta);
    return {
      frontMatter,
      slug: filename.split('.')[0],
    };
  });
  return {
    props: {
      posts,
    },
  };
};
