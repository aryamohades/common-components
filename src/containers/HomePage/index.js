/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { PureComponent, Fragment } from 'react';
import styled, { css } from 'styled-components';
import Button from 'components/Button';
import ExternalLink from 'components/ExternalLink';
import ActionLink from 'components/ActionLink';

const SectionHeader = styled.div`
  font-size: 28px;
  font-weight: bold;
`;

const Divider = styled.hr`
  margin: 20px 0;
  border: 0.5px solid #dedede;
`;

const Section = styled.div`
  padding: 25px 0;
  display: flex;
  flex-direction: column;
`;

const ComponentHeader = styled.div`
  margin-bottom: 25px;
`;

const ComponentTitle = styled.div`
  font-size: 20px;
  margin-bottom: 8px;
`;

const ComponentDescription = styled.div`
  color: #888;
`;

const ComponentRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ComponentContainer = styled.div`
  margin-right: 25px;
`;

const StyleSwitchContainer = styled.div`
  display: flex;
  margin-bottom: 25px;
`;

const StyleSwitcher = styled.div`
  user-select: none;
  text-align: center;
  font-size: 14px;
  border: 1px solid #dedede;
  padding: 10px 12px;
  cursor: pointer;
  min-width: 125px;

  &:hover {
    background: #f1f1f1;
  }

  ${({ active }) =>
    active &&
    css`
      background: #dedede;
    `};
`;

class HomePage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      buttonTheme: 'primary',
      linkSize: 'md',
    };
  }

  changeButtonTheme = buttonTheme => {
    this.setState(() => ({
      buttonTheme,
    }));
  };

  changeLinkSize = linkSize => {
    this.setState(() => ({
      linkSize,
    }));
  };

  render() {
    const { buttonTheme, linkSize } = this.state;

    const buttonThemeSwitchers = [
      'primary',
      'light',
      'dark',
      'green',
      'red',
      'blue',
    ].map(theme => (
      <StyleSwitcher
        key={theme}
        active={buttonTheme === theme}
        onClick={() => this.changeButtonTheme(theme)}
      >
        {theme.charAt(0).toUpperCase() + theme.slice(1)}
      </StyleSwitcher>
    ));

    const linkSizeSwitchers = [
      { prop: 'xs', label: 'Extra Small' },
      { prop: 'sm', label: 'Small' },
      { prop: 'md', label: 'Medium' },
      { prop: 'lg', label: 'Large' },
      { prop: 'xl', label: 'Extra Large' },
    ].map(size => (
      <StyleSwitcher
        key={size.prop}
        active={linkSize === size.prop}
        onClick={() => this.changeLinkSize(size.prop)}
      >
        {size.label.charAt(0).toUpperCase() + size.label.slice(1)}
      </StyleSwitcher>
    ));

    return (
      <Fragment>
        <SectionHeader>Buttons</SectionHeader>
        <Divider />
        <StyleSwitchContainer>{buttonThemeSwitchers}</StyleSwitchContainer>
        <Section>
          <ComponentHeader>
            <ComponentTitle>Button</ComponentTitle>
            <ComponentDescription>
              A general purpose button with multiple themes
            </ComponentDescription>
          </ComponentHeader>
          <ComponentRow>
            <ComponentContainer>
              <Button theme={buttonTheme} size="sm" handleClick={() => {}}>
                Small
              </Button>
            </ComponentContainer>
            <ComponentContainer>
              <Button theme={buttonTheme} size="md" handleClick={() => {}}>
                Medium
              </Button>
            </ComponentContainer>
            <ComponentContainer>
              <Button theme={buttonTheme} size="lg" handleClick={() => {}}>
                Large
              </Button>
            </ComponentContainer>
            <ComponentContainer>
              <Button theme={buttonTheme} icon="coffee" handleClick={() => {}}>
                Icon
              </Button>
            </ComponentContainer>
            <ComponentContainer>
              <Button theme={buttonTheme} disabled handleClick={() => {}}>
                Disabled
              </Button>
            </ComponentContainer>
          </ComponentRow>
        </Section>
        <SectionHeader>Links</SectionHeader>
        <Divider />
        <StyleSwitchContainer>{linkSizeSwitchers}</StyleSwitchContainer>
        <Section>
          <ComponentHeader>
            <ComponentTitle>External Link</ComponentTitle>
            <ComponentDescription>
              A link that takes the user outside of the app, to another domain.
            </ComponentDescription>
          </ComponentHeader>
          <ComponentContainer>
            <ExternalLink size={linkSize} href="#">
              https://www.google.com
            </ExternalLink>
          </ComponentContainer>
        </Section>
        <Section>
          <ComponentHeader>
            <ComponentTitle>Action Link</ComponentTitle>
            <ComponentDescription>
              A link that performs an action
            </ComponentDescription>
          </ComponentHeader>
          <ComponentRow>
            <ComponentContainer>
              <ActionLink size={linkSize} onClick={() => {}}>
                Create new
              </ActionLink>
            </ComponentContainer>
            <ComponentContainer>
              <ActionLink size={linkSize} icon="bacon" to="/users">
                View Bacon
              </ActionLink>
            </ComponentContainer>
            <ComponentContainer>
              <ActionLink
                size={linkSize}
                icon="chevron-right"
                iconPosition="right"
                to="/users"
              >
                View Arrow
              </ActionLink>
            </ComponentContainer>
            <ComponentContainer>
              <ActionLink size={linkSize} to="/users" alt>
                View Actions
              </ActionLink>
            </ComponentContainer>
            <ComponentContainer>
              <ActionLink size={linkSize} icon="filter" to="/users" alt>
                View Filter
              </ActionLink>
            </ComponentContainer>
            <ComponentContainer>
              <ActionLink
                size={linkSize}
                icon="coffee"
                iconPosition="right"
                to="/users"
                alt
              >
                View Coffee
              </ActionLink>
            </ComponentContainer>
          </ComponentRow>
        </Section>
      </Fragment>
    );
  }
}

export default HomePage;
