import React from 'react';
import { Wrapper } from './categories.style';

export const Categories = () => {
  return (
    <Wrapper>
      <div className='header'>
        <h2>Categories</h2>
        <span>See all</span>
      </div>
      <div className='list'>
        <ul>
          <li>HTML</li>
          <li className='current'>CSS</li>
          <li>JavaScript</li>
          <li>ReactJS</li>
          <li>TailwindCSS</li>
        </ul>
      </div>
    </Wrapper>
  );
};
