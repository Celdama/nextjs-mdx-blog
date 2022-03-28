import styled from 'styled-components';

export const Wrapper = styled.div`
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg {
      height: 28px;
    }
  }

  .tag {
    padding: 6px 8px;
    text-transform: capitalize;
    background-color: #eeb395;
    color: #352f43;
  }

  .date {
    color: #c4c3c6;
  }

  .author {
    width: 70%;
    padding: 20px;
    display: flex;
    background-color: white;
    position: relative;
    top: -50px;

    p {
      margin-left: 15px;
      color: #c4c3c6;
      font-size: 0.9rem;

      span {
        font-size: 1.1rem;

        a {
          text-decoration: none;
          color: #352f43;
        }
      }
    }
  }
`;
