/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Button from 'components/Button';

const Section = styled.div`
  margin-bottom: 20px;
`;

const Row = styled.div`
  display: flex;
`;

const Col = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const HeaderLabel = styled.div`
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const HomePage = () => (
  <Fragment>
    <Row>
      <Col>
        <HeaderLabel>Button</HeaderLabel>
        <Section>
          <Button size={'small'} handleClick={() => {}}>Small</Button>
        </Section>
        <Section>
          <Button size={'medium'} handleClick={() => {}}>Medium</Button>
        </Section>
        <Section>
          <Button size={'large'} handleClick={() => {}}>Large</Button>
        </Section>
        <Section>
          <Button icon={'coffee'} handleClick={() => {}}>Icon</Button>
        </Section>
        <Section>
          <Button disabled handleClick={() => {}}>Disabled</Button>
        </Section>
      </Col>
      <Col>
        <HeaderLabel>Primary Button</HeaderLabel>
        <Section>
          <Button theme={'primary'} size={'small'} handleClick={() => {}}>Small</Button>
        </Section>
        <Section>
          <Button theme={'primary'} size={'medium'} handleClick={() => {}}>Medium</Button>
        </Section>
        <Section>
          <Button theme={'primary'} size={'large'} handleClick={() => {}}>Large</Button>
        </Section>
        <Section>
          <Button theme={'primary'} icon={'coffee'} handleClick={() => {}}>Icon</Button>
        </Section>
        <Section>
          <Button theme={'primary'} disabled handleClick={() => {}}>Disabled</Button>
        </Section>
      </Col>
      <Col>
        <HeaderLabel>Dark Button</HeaderLabel>
        <Section>
          <Button theme={'dark'} size={'small'} handleClick={() => {}}>Small</Button>
        </Section>
        <Section>
          <Button theme={'dark'} size={'medium'} handleClick={() => {}}>Medium</Button>
        </Section>
        <Section>
          <Button theme={'dark'} size={'large'} handleClick={() => {}}>Large</Button>
        </Section>
        <Section>
          <Button theme={'dark'} icon={'coffee'} handleClick={() => {}}>Icon</Button>
        </Section>
        <Section>
          <Button theme={'dark'} disabled handleClick={() => {}}>Disabled</Button>
        </Section>
      </Col>
      <Col>
        <HeaderLabel>Green Button</HeaderLabel>
        <Section>
          <Button theme={'green'} size={'small'} handleClick={() => {}}>Small</Button>
        </Section>
        <Section>
          <Button theme={'green'} size={'medium'} handleClick={() => {}}>Medium</Button>
        </Section>
        <Section>
          <Button theme={'green'} size={'large'} handleClick={() => {}}>Large</Button>
        </Section>
        <Section>
          <Button theme={'green'} icon={'coffee'} handleClick={() => {}}>Icon</Button>
        </Section>
        <Section>
          <Button theme={'green'} disabled handleClick={() => {}}>Disabled</Button>
        </Section>
      </Col>
      <Col>
        <HeaderLabel>Red Button</HeaderLabel>
        <Section>
          <Button theme={'red'} size={'small'} handleClick={() => {}}>Small</Button>
        </Section>
        <Section>
          <Button theme={'red'} size={'medium'} handleClick={() => {}}>Medium</Button>
        </Section>
        <Section>
          <Button theme={'red'} size={'large'} handleClick={() => {}}>Large</Button>
        </Section>
        <Section>
          <Button theme={'red'} icon={'coffee'} handleClick={() => {}}>Icon</Button>
        </Section>
        <Section>
          <Button theme={'red'} disabled handleClick={() => {}}>Disabled</Button>
        </Section>
      </Col>
    </Row>
  </Fragment>
);

export default HomePage;
