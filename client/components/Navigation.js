'use strict'

import React, { Component, PropTypes } from 'react';
import Home from './Index';
import Profile from './Profile';
import { Route, RouteHandler, Link } from 'react-router';
import { Icon, Menu, Dropdown, Button } from 'semantic-ui-react'
import { LinkContainer } from 'react-router-bootstrap';

export default class Navigation extends Component {
  static propTypes = { };
  render () {
    const {color} = { color: 'teal'}
    const style = {fontSize:'120%' }
    const trigger = (
  <span style={style}>
    <Icon name='user' /> Hello, Bob
  </span>
)
      return (
        <Menu color={color} inverted stackable>
         <LinkContainer to="index">
            <Menu.Item>
             piSCES
            </Menu.Item>
         </LinkContainer>
          <Menu.Menu position='right'>
             <Dropdown item trigger={trigger} >
                <Dropdown.Menu>
                <Dropdown.Item>Profile</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Menu>
        )
      }
    }
