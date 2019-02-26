import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getFontSize } from 'utils/style';

const baseStyle = css`
  display: flex;
  align-items: center;
  color: #777;
  text-decoration: none;

  &:hover {
    color: #333;
    text-decoration: underline;
  }
`;

const altStyle = css`
  color: #333;
  font-weight: bold;
  -webkit-font-smoothing: initial;
  padding: 6px 14px;
  border-radius: 4px;

  &:hover {
    text-decoration: none;
    background: #e2e4e6;
  }
`;

const LinkWrapper = styled.a`
  ${getFontSize};
  ${baseStyle};
  ${({ alt }) => alt && altStyle};
`;

const RouterLinkWrapper = styled(Link)`
  ${getFontSize};
  ${baseStyle};
  ${({ alt }) => alt && altStyle};
`;

const IconWrapper = styled(FontAwesomeIcon)`
  color: #777;
  margin-right: 8px;
  font-size: 0.85em;

  ${({ position }) =>
    position === 'right' &&
    css`
      margin-right: 0;
      margin-left: 8px;
    `};
`;

const ActionLink = ({
  to,
  icon,
  iconPosition,
  alt,
  handleClick,
  children,
  ...rest
}) => {
  let iconComponent;

  if (icon) {
    iconComponent =
      iconPosition === 'left' ? (
        <IconWrapper icon={icon} />
      ) : (
        <IconWrapper icon={icon} position="right" />
      );
  }

  if (to) {
    return (
      <RouterLinkWrapper to={to} alt={alt ? 1 : 0} {...rest}>
        {iconPosition === 'left' && iconComponent}
        {children}
        {iconPosition === 'right' && iconComponent}
      </RouterLinkWrapper>
    );
  }

  return (
    <LinkWrapper onClick={handleClick} {...rest} alt={alt ? 1 : 0}>
      {children}
    </LinkWrapper>
  );
};

ActionLink.propTypes = {
  to: PropTypes.oneOfType([
    PropTypes.shape({
      pathname: PropTypes.string,
      query: PropTypes.object,
      hash: PropTypes.string,
      state: PropTypes.object,
    }),
    PropTypes.string,
  ]),
  icon: PropTypes.string,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  handleClick: PropTypes.func,
};

ActionLink.defaultProps = {
  iconPosition: 'left',
  handleClick: () => {},
};

export default ActionLink;
