import Link from 'next/link';
import Image from 'next/image';
import {
  Wrapper,
  Content,
  PostImageContainer,
  Tag,
  PostInfoContainer,
} from './post.style';

export const Post = ({ post, index }) => {
  const { slug, frontMatter } = post;
  const { title, date, thumbnailUrl, tags } = frontMatter;

  return (
    <Wrapper>
      <Link href={'/blog/' + slug} passHref key={index}>
        <Content>
          <PostImageContainer>
            <Image
              src={thumbnailUrl}
              alt='thumbnail'
              width={500}
              layout='responsive'
              height={246}
            />
            <Tag>{tags}</Tag>
          </PostImageContainer>
          <PostInfoContainer>
            <div>
              <h5>{title}</h5>
              <p>
                <small>{date}</small>
              </p>
            </div>
          </PostInfoContainer>
        </Content>
      </Link>
    </Wrapper>
  );
};
