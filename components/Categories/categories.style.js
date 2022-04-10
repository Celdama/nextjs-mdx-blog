import styled from 'styled-components';

export const Wrapper = styled.div`
  font-family: sans-serif;
  margin: 20px 0;
  color: #2c2e42;

  .current {
    background-color: #352f43;
    color: whitesmoke;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background-color: transparent;
    border: none;

    :hover {
      cursor: pointer;
    }
  }
`;

export const TagsList = styled.div`
  ul {
    list-style: none;
    display: flex;
    padding: 0;
    justify-content: space-between;

    li {
      font-size: 0.9rem;
      padding: 6px 8px;
      text-transform: capitalize;
      cursor: pointer;
    }

    @media screen and (max-width: 500px) {
      .hide {
        display: none;
      }
    }
  }
`;
