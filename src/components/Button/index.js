import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  buttonFontSizeSmall,
  buttonPaddingSmall,
  buttonFontSizeMedium,
  buttonFontSizeLarge,
  buttonPaddingMedium,
  buttonPaddingLarge,
  primaryButtonColor,
  primaryButtonColorHover,
  primaryButtonColorActive,
  primaryButtonTextColor,
  primaryButtonTextColorHover,
  primaryButtonTextColorActive,
  BUTTON_COLOR_MAP,
} from 'theme';

export const Wrapper = styled.button`
  ${props => (
    props.size === 'small' && css`
      font-size: ${buttonFontSizeSmall};
      padding: ${buttonPaddingSmall};
    `
    )}

  ${props => (
    props.size === 'medium' && css`
      font-size: ${buttonFontSizeMedium};
      padding: ${buttonPaddingMedium};
    `
    )}

  ${props => (
    props.size === 'large' && css`
      font-size: ${buttonFontSizeLarge};
      padding: ${buttonPaddingLarge};
    `
    )}

  ${props => (
    !props.disabled && BUTTON_COLOR_MAP[props.theme] && css`
      background: ${BUTTON_COLOR_MAP[props.theme].buttonColor};
      color: ${BUTTON_COLOR_MAP[props.theme].buttonTextColor};
      box-shadow: 0 2px ${BUTTON_COLOR_MAP[props.theme].buttonShadow};

      &:hover {
        background: ${BUTTON_COLOR_MAP[props.theme].buttonColorHover};
        color: ${BUTTON_COLOR_MAP[props.theme].buttonTextColorHover};
        box-shadow: 0 2px ${BUTTON_COLOR_MAP[props.theme].buttonShadowHover};
      }

      &:active {
        background: ${BUTTON_COLOR_MAP[props.theme].buttonColorActive};
        color: ${BUTTON_COLOR_MAP[props.theme].buttonTextColorActive};
        box-shadow: 0 2px ${BUTTON_COLOR_MAP[props.theme].buttonShadowActive};
      }
    `
    )}
`;

const Button = ({ handleClick, disabled, children, ...rest }) => (
  <Wrapper {...rest} onClick={handleClick} disabled={disabled}>
    {children}
  </Wrapper>
);

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
  theme: PropTypes.oneOf(['primary', 'light', 'dark', 'green', 'blue', 'red']).isRequired,
};

Button.defaultProps = {
  size: 'medium',
  theme: 'light',
};

export default Button;
