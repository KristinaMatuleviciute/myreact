'use strict'

import React, { Component, PropTypes } from 'react';
import Home from './Index';
import Profile from './Profile';
import { Route, RouteHandler, Link } from 'react-router';
import { Accordion, Divider, Transition, Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react';
import { LinkContainer } from 'react-router-bootstrap';

export default class Navigation extends Component {
  constructor (props) {
    super(props)
    this.state = { visible: true }

      this.toggleVisibility = () => this.setState({ visible: !this.state.visible })

}
  render () {
    var style = {paddingRight:'20px'};
    const { visible } = this.state
      return (
        <div style={style} >
        <Icon name='content' content={visible ? 'Hide' : 'Show'} onClick={this.toggleVisibility}/>
         <Divider hidden />
         <Transition visible={visible} animation='scale' duration={500}>
           <Menu vertical>
           <LinkContainer to="index">
           <Menu.Item name='home'>
             <Icon name='home' />
             Home
           </Menu.Item>
           </LinkContainer>
           <LinkContainer to="load">
           <Menu.Item name='load'>
             <Icon name='shopping basket' />
             Load
           </Menu.Item>
           </LinkContainer>
           <LinkContainer to="price">
           <Menu.Item name='price'>
             <Icon name='euro' />
             Price
           </Menu.Item>
           </LinkContainer>
           <LinkContainer to="wind">
           <Menu.Item name='wind'>
             <Icon name='location arrow' />
             Wind
           </Menu.Item>
           </LinkContainer>
           <LinkContainer to="solar">
           <Menu.Item name='sun'>
             <Icon name='sun' />
             Solar
           </Menu.Item>
           </LinkContainer>
           <LinkContainer to="weather">
           <Menu.Item name='weather'>
             <Icon name='umbrella' />
             Weather
           </Menu.Item>
           </LinkContainer>
           <LinkContainer to="settings">
           <Menu.Item name='settings'>
             <Icon name='settings' />
             Settings
           </Menu.Item>
           </LinkContainer>
           </Menu>
          </Transition>
        </div>
        )
      }
    }
