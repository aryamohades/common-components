import { createGlobalStyle } from 'styled-components';
import {
  font,
  bodyBackgroundColor,
  textColor,
  buttonFont,
  buttonBorderRadius,
  buttonBorder,
  buttonColorDisabled,
  buttonTextColorDisabled,
  linkColor,
  linkColorHover,
} from './theme';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: ${font};
    color: ${textColor};
  }

  #app {
    background-color: ${bodyBackgroundColor};
    min-height: 100%;
    min-width: 100%;
  }

  a {
    cursor: pointer;
    color: ${linkColor};
    text-decoration: underline;

    &:hover {
      color: ${linkColorHover};
    }
  }

  button {
    display: inline-block;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -webkit-touch-callout: none;
    user-select: none;
    cursor: pointer;
    outline: 0;
    text-decoration: none;
    font-weight: bold;
    border-radius: ${buttonBorderRadius};
    font-family: ${buttonFont};
    border: ${buttonBorder};

    &:disabled {
      cursor: not-allowed;
      background: ${buttonColorDisabled};
      color: ${buttonTextColorDisabled};
    }
  }
`;

export default GlobalStyle;
