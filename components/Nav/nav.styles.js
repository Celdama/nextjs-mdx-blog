import styled from 'styled-components';

export const Wrapper = styled.nav`
  padding: 16px;
  background-color: #352f43;
  color: whitesmoke;

  .content {
    max-width: 40rem;
    margin: 0 auto;
    flex-direction: column;
    display: flex;
  }
`;

export const NavTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    margin: 0;

    :hover {
      cursor: pointer;
    }
  }
`;

export const NavBottom = styled.div`
  display: flex;
  margin-top: 22px;
  justify-content: space-between;
  gap: 10px;

  .filter {
    background-color: #eeb395;
    color: #352f43;
    padding: 8px;
    height: 24px;

    :hover {
      cursor: pointer;
    }
  }
`;

export const SearchBar = styled.input`
  flex-grow: 1;
  padding: 10px 12px;
  color: whitesmoke;
  outline: none;
  border: none;
  background-color: #494355;
`;
