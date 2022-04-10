import React from 'react';
import { Wrapper, Header, TagsList } from './categories.style';

export const Categories = ({ list, handleChangeCategory, activeFilter }) => {
  console.log(activeFilter);
  return (
    <Wrapper>
      <Header>
        <h2>Categories</h2>
        <button
          onClick={() => handleChangeCategory(null)}
          className={activeFilter === null ? 'current' : ''}
        >
          All
        </button>
      </Header>
      <TagsList>
        <ul>
          {list.map((item, index) => (
            <li
              onClick={() => handleChangeCategory(item)}
              key={index}
              className={item === activeFilter ? 'current' : ''}
            >
              {item}
            </li>
          ))}
        </ul>
      </TagsList>
    </Wrapper>
  );
};
