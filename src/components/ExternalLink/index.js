import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getFontSize } from 'utils/style';

const LinkWrapper = styled.a`
  color: #333;

  &:hover {
    color: #111;
  }

  ${getFontSize};
`;

const ExternalLink = ({ children, ...rest }) => (
  <LinkWrapper {...rest}>{children}</LinkWrapper>
);

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
};

export default ExternalLink;
