import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 0.5px solid lightgray;
  border-radius: 4px;
  display: flex;
  background-color: white;
  width: 100%;

  .body {
    padding: 12px;
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
  }

  h5 {
    margin: 0;
  }

  p {
    font-size: 0.8rem;
    /* width: 80%; */
    margin: 0;
    color: rgba(0, 0, 0, 0.5);
  }

  .desc {
    margin: 10px 0;
    line-height: 1rem;
  }

  .image {
    display: none;
  }

  .link {
    color: black;
    line-height: 1rem;
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
