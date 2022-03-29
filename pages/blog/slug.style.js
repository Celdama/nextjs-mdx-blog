import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #f6f6f6;
  padding: 18px;

  .info {
    h1 {
      color: #2c2e42;
      margin-bottom: 0;
    }
  }
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

  .post-img {
    display: flex;
    flex-direction: column;
  }

  .date {
    color: #6c757d;
    font-size: 0.8rem;
  }

  .content {
    h1 {
      color: #2c2e42;
    }

    color: #2c2e42;
    line-height: 1.8rem;
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
      color: #6c757d;
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
