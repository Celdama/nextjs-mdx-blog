import Image from 'next/image';
import {
  Wrapper,
  Link,
  LinkBodyContainer,
  LinkImageContainer,
} from './linkPreviewer.style';

export const LinkPreviewer = ({ href, image, title, text }) => {
  return (
    <Link href={href} target='_blank' rel='noreferrer'>
      <Wrapper>
        <LinkBodyContainer>
          <h5>{title}</h5>
          <p className='desc'>{text}</p>
          <p className='link'>{`${href.slice(0, 40)}...`}</p>
        </LinkBodyContainer>
        <LinkImageContainer>
          <Image
            src={image}
            width={200}
            height={180}
            alt='thumbnail'
            objectFit='cover'
          />
        </LinkImageContainer>
      </Wrapper>
    </Link>
  );
};
