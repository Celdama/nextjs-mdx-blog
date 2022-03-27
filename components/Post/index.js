import Link from 'next/link';
import Image from 'next/image';

export default function Post({ post, index }) {
  const { slug, frontMatter } = post;
  const { title, description, date, thumbnailUrl } = frontMatter;

  return (
    <Link href={'/blog/' + slug} passHref key={index}>
      <div style={{ maxWidth: '540px' }}>
        <div>
          <div>
            <div>
              <h5>{title}</h5>
              <p>{description}</p>
              <p>
                <small>{date}</small>
              </p>
            </div>
          </div>
          <div>
            <Image
              src={thumbnailUrl}
              alt='thumbnail'
              width={500}
              height={400}
              objectFit='cover'
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
