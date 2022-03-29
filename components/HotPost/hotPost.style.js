import styled from 'styled-components';

export const Wrapper = styled.div`
  /* width: 100%; */
  max-width: 38rem;

  h2 {
    color: #2c2e42;
  }
`;

export const PostContent = styled.article`
  height: 200px;
  position: relative;

  h5 {
    font-size: 1rem;
    color: #352f43;
    margin: 0;
  }

  p {
    margin: 0;
    color: #6c757d;
    font-size: 0.9rem;
  }

  :hover {
    cursor: pointer;
  }
`;

export const InfoContainer = styled.div`
  width: 60%;
  height: 130px;
  position: absolute;
  z-index: 2;
  background-color: white;
  right: 0;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const ImageContainer = styled.div`
  position: absolute;
  bottom: 0;
`;

export const Tag = styled.span`
  background-color: #eeb395;
  padding: 6px 8px;
  color: #352f43;
`;
