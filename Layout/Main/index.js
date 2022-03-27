import React from 'react';
import { Wrapper, Content } from './main.tw';

const Main = ({ children }) => {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Main;
