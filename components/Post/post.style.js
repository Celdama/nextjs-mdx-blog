import styled from 'styled-components';

export const Wrapper = styled.article`
  outline: 1px solid lightgray;
  border-radius: 3px;
  margin: 20px 0;
  padding: 12px;
  font-family: sans-serif;
  background-color: white;

  :hover {
    cursor: pointer;
  }
  /* background-color: #f9f9f9; */

  h5 {
    font-size: 1rem;
    margin: 12px 0;
    color: #352f43;
  }

  p {
    margin: 0;
    color: #6c757d;
  }

  .thumb {
    position: relative;

    .tag {
      position: absolute;
      left: 5px;
      bottom: 10px;
      padding: 6px 8px;
      text-transform: capitalize;
      background-color: #eeb395;
      color: #352f43;
      font-family: sans-serif;
    }
  }

  img {
    border-radius: 3px;
    height: 220px;
  }
`;

export const Content = styled.div``;
