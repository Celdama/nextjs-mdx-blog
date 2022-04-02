import { useEffect, useState } from 'react';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import Layout from '../components/Layout';
import { Post } from '../components/Post';
import { HotPost } from '../components/HotPost';
import { Categories } from '../components/Categories';
import { PostContent } from '../components/HotPost/hotPost.style';

export default function Home({ posts }) {
  const hotPost = posts[0];
  const [filter, setFilter] = useState(null);
  const [listCategories, setListCategories] = useState([]);

  useEffect(() => {
    const list = [];
    posts.map((post) => {
      if (!list.includes(post.frontMatter.tags)) {
        list.push(post.frontMatter.tags);
      }
    });
    setListCategories(list);
  }, [setListCategories, posts]);

  const handleChangeCategory = (value) => {
    setFilter(value);
  };

  const postsContentWithFilter = posts.map((post, index) => {
    if (post.frontMatter.tags === filter) {
      return <Post key={index} post={post} index={index} />;
    }
  });

  const postsContent = posts.map((post, index) => (
    <Post key={index} post={post} index={index} />
  ));

  return (
    <Layout>
      <HotPost hotPost={hotPost} />
      <Categories
        list={listCategories}
        handleChangeCategory={handleChangeCategory}
        activeFilter={filter}
      />
      <div className='container'>
        {filter ? <>{postsContentWithFilter}</> : <>{postsContent}</>}
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
