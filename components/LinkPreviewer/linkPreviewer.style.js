import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 0.5px solid gray;
  display: flex;
  /* height: 140px; */
  background-color: white;
  .body {
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h5 {
    margin: 0;
  }

  p {
    font-size: 0.8rem;
    margin: 0;
    color: rgba(0, 0, 0, 0.5);
  }

  .desc {
    margin: 10px 0;
  }

  .image {
    display: none;
  }

  .link {
    color: black;
  }

  @media screen and (min-width: 500px) {
    .image {
      display: block;
    }
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: black;
`;
