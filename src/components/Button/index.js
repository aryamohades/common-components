import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getButtonStyle, getButtonSize } from 'utils/style';

const IconWrapper = styled(FontAwesomeIcon)`
  margin-right: 8px;
`;

export const ButtonWrapper = styled.button`
  ${getButtonSize};
  ${getButtonStyle};
`;

const Button = ({ handleClick, icon, disabled, children, ...rest }) => (
  <ButtonWrapper {...rest} onClick={handleClick} disabled={disabled}>
    {icon && <IconWrapper icon={icon} />}
    {children}
  </ButtonWrapper>
);

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  icon: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
