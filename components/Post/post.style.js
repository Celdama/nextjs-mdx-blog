import styled from 'styled-components';

export const Wrapper = styled.article`
  outline: 1px solid lightgray;
  border-radius: 3px;
  margin: 20px 0;
  padding: 12px;
  font-family: sans-serif;
  background-color: white;
  width: 36rem;

  :hover {
    cursor: pointer;
  }
`;

export const Content = styled.div``;

export const PostImageContainer = styled.div`
  position: relative;

  img {
    border-radius: 3px;
    height: 220px;
  }
`;

export const PostInfoContainer = styled.div`
  h5 {
    font-size: 1rem;
    margin: 12px 0;
    color: #352f43;
  }

  p {
    margin: 0;
    color: #6c757d;
  }
`;

export const Tag = styled.span`
  position: absolute;
  left: 5px;
  bottom: 5px;
  padding: 6px 8px;
  text-transform: capitalize;
  background-color: #eeb395;
  color: #352f43;
`;
