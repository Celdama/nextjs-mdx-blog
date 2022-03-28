import React from 'react';
import Image from 'next/image';
import { Wrapper, Link } from './linkPreviewer.style';

export const LinkPreviewer = ({ href, image, title, text }) => {
  return (
    <Link href={href} target='_blank' rel='noreferrer'>
      <Card image={image} title={title} text={text} link={href} />
    </Link>
  );
};

const Card = ({ image, title, text, link }) => {
  return (
    <Wrapper className='card'>
      <div className='body'>
        <h5>{title}</h5>
        <p className='desc'>{text}</p>
        <p className='link'>{link}</p>
      </div>
      <div className='image'>
        <Image
          src={image}
          width={200}
          height={180}
          alt='thumbnail'
          objectFit='cover'
        />
      </div>
    </Wrapper>
  );
};
