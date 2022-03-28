import styled from 'styled-components';

export const Wrapper = styled.nav`
  padding: 16px;
  font-family: sans-serif;
  background-color: #352f43;
  color: whitesmoke;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: space-between; */

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .footer {
    display: flex;
    margin-top: 22px;
    justify-content: space-between;

    input {
      padding: 12px;
      color: whitesmoke;
      width: 80%;
      border: none;
      background-color: #494355;
    }

    .filter {
      background-color: #eeb395;
      color: #352f43;
      padding: 10px;
    }
  }

  svg {
    height: 24px;
  }

  h2 {
    margin: 0;
  }
`;

// Internet : c’est quoi ?

// Introduction au web.

// Comment le web fonctionne ?

// HTTP : c’est quoi ?

// HTML : c’est quoi ?
