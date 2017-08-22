'use strict';

import React from 'react';
import img from '../assets/img/icon-signin.svg'

import {
  Grid,
  Form,
  Message,
  Segment,
  Button,
  Menu,
  Image,
  Icon,
  Header,
  Tab
 } from 'semantic-ui-react'
import { LinkContainer } from 'react-router-bootstrap';


export default class Index extends React.Component {
  constructor (props) {
    super(props)

}
  render () {
    const containerStyle = {
      marginTop: '100px'
    }
    return(
      <div className="container" style={containerStyle}>
      <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          {' '}Log-in to your piSCES account
        </Header>
        <Form size='massive'>
          <Segment stacked>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='E-mail address'
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />

            <Button color='teal' fluid size='large'>Login</Button>
          </Segment>
        </Form>
        <Message>
          <a href='#'>Forgot your password? </a>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
)
  }
}
