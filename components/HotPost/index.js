import React from 'react';
import Image from 'next/image';
import { Wrapper } from './hotPost.style';

export const HotPost = ({ hotPost }) => {
  console.log(hotPost.frontMatter.title);
  return (
    <Wrapper>
      <h2>Hot post</h2>
      <div className='content'>
        <div className='text'>
          <span className='tag'>{hotPost.frontMatter.tags[0]}</span>
          <h5 className='title'>{hotPost.frontMatter.title}</h5>
          <p>{hotPost.frontMatter.date}</p>
        </div>
        <div className='thumb'>
          <Image
            src={hotPost.frontMatter.thumbnailUrl}
            width={190}
            height={160}
            alt='thumbnail'
            objectFit='cover'
          />
        </div>
      </div>
    </Wrapper>
  );
};
