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
  const { slug, frontMatter } = hotPost;
  const { tags, title, date, thumbnailUrl } = frontMatter;
  return (
    <Wrapper>
      <h2>Hot post</h2>
      <Link className='link' href={`/blog/${slug}`} passHref>
        <PostContent>
          <InfoContainer>
            <Tag>{tags}</Tag>
            <h5>{title}</h5>
            <p>{date}</p>
          </InfoContainer>
          <ImageContainer>
            <Image
              src={thumbnailUrl}
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
