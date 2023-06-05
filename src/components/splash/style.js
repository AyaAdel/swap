import Styled from 'styled-components';

export const SplashWrapper = Styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    margin-bottom: 17.85px;
  }

  span {
    width: 171px;
    color: #040711;
    font-size: 34px;
    line-height: 30px;
    letter-spacing: 0.75em;
    text-transform: uppercase;
  }
`;
