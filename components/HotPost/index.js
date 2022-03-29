import React from 'react';
import Image from 'next/image';
import {
  ImageContainer,
  InfoContainer,
  PostContent,
  Tag,
  Wrapper,
} from './hotPost.style';
import Link from 'next/link';

export const HotPost = ({ hotPost }) => {
  return (
    <Wrapper>
      <h2>Hot post</h2>
      <Link className='link' href={`/blog/${hotPost.slug}`} passHref>
        <PostContent>
          <InfoContainer>
            <Tag>{hotPost.frontMatter.tags[0]}</Tag>
            <h5>{hotPost.frontMatter.title}</h5>
            <p>{hotPost.frontMatter.date}</p>
          </InfoContainer>
          <ImageContainer>
            <Image
              src={hotPost.frontMatter.thumbnailUrl}
              width={290}
              height={170}
              alt='thumbnail'
              objectFit='cover'
            />
          </ImageContainer>
        </PostContent>
      </Link>
    </Wrapper>
  );
};
