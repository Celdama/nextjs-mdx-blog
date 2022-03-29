import React from 'react';
import Image from 'next/image';
import { Wrapper } from './hotPost.style';
import Link from 'next/link';

export const HotPost = ({ hotPost }) => {
  return (
    <Wrapper>
      <h2>Hot post</h2>
      <Link className='link' href={`/blog/${hotPost.slug}`} passHref>
        <div className='content'>
          <div className='text'>
            <span className='tag'>{hotPost.frontMatter.tags[0]}</span>
            <h5 className='title'>{hotPost.frontMatter.title}</h5>
            <p>{hotPost.frontMatter.date}</p>
          </div>
          <div className='thumb'>
            <Image
              src={hotPost.frontMatter.thumbnailUrl}
              width={290}
              height={170}
              alt='thumbnail'
              objectFit='cover'
            />
          </div>
        </div>
      </Link>
    </Wrapper>
  );
};
