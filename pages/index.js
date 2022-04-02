import { useState } from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Layout from '../components/Layout';
import { Post } from '../components/Post';
import { HotPost } from '../components/HotPost';
import { Categories } from '../components/Categories';

export default function Home({ posts }) {
  const hotPost = posts[0];
  const [filter, setFilter] = useState('job');

  posts.map((post) => {
    console.log(post.frontMatter.tags[0]);
    // if(post.frontMatter.ta)
  });

  const postsContent = posts.map((post, index) => (
    <Post key={index} post={post} index={index} />
  ));

  // const postsContentWithFilter = posts.map(post)

  return (
    <Layout>
      <HotPost hotPost={hotPost} />
      <Categories />
      <div className='container'>{postsContent}</div>
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
