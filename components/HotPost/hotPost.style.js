import styled from 'styled-components';

export const Wrapper = styled.div`
  font-family: sans-serif;

  .content {
    height: 200px;
    position: relative;

    .text {
      width: 230px;
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
    }

    h5 {
      font-size: 1rem;
      color: #352f43;
      margin: 0;
    }

    p {
      margin: 0;
      color: #c4c3c6;
    }

    .tag {
      background-color: #eeb395;
      padding: 6px 8px;
      color: #352f43;
    }

    .thumb {
      position: absolute;
      bottom: 0;
    }
  }
`;
