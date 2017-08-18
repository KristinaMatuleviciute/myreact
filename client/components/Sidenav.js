'use strict'

import React, { Component, PropTypes } from 'react';
import Home from './Index';
import Profile from './Profile';
import { Route, RouteHandler, Link } from 'react-router';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react';
import { LinkContainer } from 'react-router-bootstrap';

export default class Navigation extends Component {
  constructor (props) {
    super(props)
    this.state = { visible: false }

      this.toggleVisibility = () => this.setState({ visible: !this.state.visible })

}
  render () {
    const { visible } = this.state
      return (
        <div>
        <Icon name='content'onClick={this.toggleVisibility} />
          <Sidebar.Pushable as={Segment}>
            <Sidebar as={Menu} animation='scale down' width='thin' visible={visible} icon='labeled' vertical >
              <Menu.Item name='home'>
                <Icon name='home' />
                Home
              </Menu.Item>
              <Menu.Item name='weather'>
                <Icon name='umbrella' />
                Weather
              </Menu.Item>
              <Menu.Item name='sun'>
                <Icon name='sun' />
                Solar
              </Menu.Item>
              <Menu.Item name='wind'>
                <Icon name='location arrow' />
                Wind
              </Menu.Item>
              <Menu.Item name='price'>
                <Icon name='euro' />
                Price
              </Menu.Item>
              <Menu.Item name='load'>
                <Icon name='shopping basket' />
                Load
              </Menu.Item>
              <Menu.Item name='settings'>
                <Icon name='settings' />
                Settings
              </Menu.Item>
            </Sidebar>
            <Sidebar.Pusher>
              <Segment basic>
                <Header as='h3'> </Header>


              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>
        )
      }
    }
