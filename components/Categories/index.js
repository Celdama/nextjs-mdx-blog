import React from 'react';
import { Wrapper, Header, TagsList } from './categories.style';

export const Categories = () => {
  return (
    <Wrapper>
      <Header>
        <h2>Categories</h2>
        <button>See all</button>
      </Header>
      <TagsList>
        <ul>
          <li>HTML</li>
          <li className='current'>CSS</li>
          <li>JavaScript</li>
          <li>ReactJS</li>
          <li>TailwindCSS</li>
        </ul>
      </TagsList>
    </Wrapper>
  );
};
