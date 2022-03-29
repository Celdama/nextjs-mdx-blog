import styled from 'styled-components';

export const Wrapper = styled.nav`
  .content {
    max-width: 80rem;
    margin: 0 auto;
    flex-direction: column;

    display: flex;
  }

  padding: 16px;
  font-family: sans-serif;
  background-color: #352f43;
  color: whitesmoke;

  .header {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .footer {
    display: flex;
    margin-top: 22px;
    justify-content: space-between;
    gap: 10px;

    input {
      flex-grow: 1;
      padding: 12px;
      color: whitesmoke;
      /* width: 90%; */
      outline: none;
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
