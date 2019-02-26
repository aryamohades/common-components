import { css } from 'styled-components';
import { FONT_SIZE_MAP, BUTTON_COLOR_MAP, BUTTON_SIZE_MAP } from 'theme';

export const getFontSize = ({ size = 'md' }) => {
  if (!FONT_SIZE_MAP[size]) {
    throw new Error(`Font size '${size}' does not exist; check theme.js`);
  }

  return css`
    font-size: ${FONT_SIZE_MAP[size]};
  `;
};

export const getButtonStyle = ({ theme = 'light', disabled }) => {
  if (!BUTTON_COLOR_MAP[theme]) {
    throw new Error(`Button theme '${theme}' does not exist; check theme.js`);
  }

  return (
    !disabled &&
    css`
      background: ${BUTTON_COLOR_MAP[theme].buttonColor};
      color: ${BUTTON_COLOR_MAP[theme].buttonTextColor};
      box-shadow: 0 2px ${BUTTON_COLOR_MAP[theme].buttonShadow};

      &:hover {
        background: ${BUTTON_COLOR_MAP[theme].buttonColorHover};
        color: ${BUTTON_COLOR_MAP[theme].buttonTextColorHover};
        box-shadow: 0 2px ${BUTTON_COLOR_MAP[theme].buttonShadowHover};
      }

      &:active {
        background: ${BUTTON_COLOR_MAP[theme].buttonColorActive};
        color: ${BUTTON_COLOR_MAP[theme].buttonTextColorActive};
        box-shadow: 0 2px ${BUTTON_COLOR_MAP[theme].buttonShadowActive};
      }
    `
  );
};

export const getButtonSize = ({ size = 'md' }) => {
  if (!BUTTON_SIZE_MAP[size]) {
    throw new Error(`Button size '${size}' does not exist; check theme.js`);
  }

  return css`
    font-size: ${BUTTON_SIZE_MAP[size].fontSize};
    padding: ${BUTTON_SIZE_MAP[size].padding};
  `;
};
