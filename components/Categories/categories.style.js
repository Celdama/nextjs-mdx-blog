import styled from 'styled-components';

export const Wrapper = styled.div`
  font-family: sans-serif;
  margin: 20px 0;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .list {
    ul {
      list-style: none;
      display: flex;
      padding: 0;
      justify-content: space-between;

      .current {
        background-color: #352f43;
        color: whitesmoke;
      }

      li {
        font-size: 0.9rem;
        padding: 6px 8px;
      }
    }
  }
`;
