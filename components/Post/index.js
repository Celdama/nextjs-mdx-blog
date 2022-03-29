import Link from 'next/link';
import Image from 'next/image';
import { Wrapper, Content } from './post.style';

export default function Post({ post, index }) {
  const { slug, frontMatter } = post;
  const { title, description, date, thumbnailUrl, tags } = frontMatter;

  return (
    <Link href={'/blog/' + slug} passHref key={index}>
      <Wrapper>
        <Content>
          <div className='thumb'>
            <Image
              src={thumbnailUrl}
              alt='thumbnail'
              width={500}
              layout='responsive'
              height={246}
            />
            <span className='tag'>{tags[0]}</span>
          </div>
          <div>
            <div>
              <h5>{title}</h5>
              <p>
                <small>{date}</small>
              </p>
            </div>
          </div>
        </Content>
      </Wrapper>
    </Link>
  );
}
