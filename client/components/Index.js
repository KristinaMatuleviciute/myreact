'use strict';

import React from 'react';
import img from '../assets/img/linechart.png'
import { Accordion, Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import { LinkContainer } from 'react-router-bootstrap';


export default class Index extends React.Component {
  constructor (props) {
    super(props)
    this.state = { visible: false }

      this.toggleVisibility = () => this.setState({ visible: !this.state.visible })

}
  render () {
    const { visible } = this.state
    return(
      <div>
      <div>
<Icon name='content'onClick={this.toggleVisibility} />
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='scale down' width='thin' visible={visible} icon='labeled' vertical >
            <LinkContainer to="index">
            <Menu.Item name='home'>
              <Icon name='home' />
              Home
            </Menu.Item>
            </LinkContainer>
            <LinkContainer to="weather">
            <Menu.Item name='weather'>
              <Icon name='umbrella' />
              Weather
            </Menu.Item>
            </LinkContainer>
            <LinkContainer to="solar">
            <Menu.Item name='sun'>
              <Icon name='sun' />
              Solar
            </Menu.Item>
            </LinkContainer>
            <LinkContainer to="wind">
            <Menu.Item name='wind'>
              <Icon name='location arrow' />
              Wind
            </Menu.Item>
            </LinkContainer>
            <LinkContainer to="price">
            <Menu.Item name='price'>
              <Icon name='euro' />
              Price
            </Menu.Item>
            </LinkContainer>
            <LinkContainer to="load">
            <Menu.Item name='load'>
              <Icon name='shopping basket' />
              Load
            </Menu.Item>
            </LinkContainer>
            <LinkContainer to="settings">
            <Menu.Item name='settings'>
              <Icon name='settings' />
              Settings
            </Menu.Item>
            </LinkContainer>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <Header as='h3'> </Header>

              <Accordion>
                 <Accordion.Title>
                   <Icon name='dropdown' />
                 </Accordion.Title>
                 <Accordion.Content>
                 <div >
                    <div className="widgetBox"> Load </div>
                    <div className="widgetBox"> Price </div>
                    <div className="widgetBox"> Wind </div>
                    <div className="widgetBox"> Solar </div>
                    <div className="widgetBox"> Weather </div>
                 </div>


                </Accordion.Content>
              </Accordion>
                </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>


      </div>
    )
  }
}
