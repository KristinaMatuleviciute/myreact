'use strict';

import React from 'react';
import img from '../assets/img/linechart.png'
import { Accordion, Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import { LinkContainer } from 'react-router-bootstrap';


export default class Widgets extends React.Component {
  constructor (props) {
    super(props)
    this.state = { visible: false }

      this.toggleVisibility = () => this.setState({ visible: !this.state.visible })

}
  render () {
    const { visible } = this.state
    return(
      <div>

      <Accordion>
         <Accordion.Title>
           <Icon name='dropdown' />
         </Accordion.Title>
         <Accordion.Content>
         <div >
            <div className="widgetBox">
            <LinkContainer to="load">
            <Menu.Item name='load'>
              <Icon name='shopping basket' />
              Load
            </Menu.Item>
            </LinkContainer> </div>

            <div className="widgetBox">
            <LinkContainer to="price">
            <Menu.Item name='price'>
              <Icon name='euro' />
              Price
            </Menu.Item>
            </LinkContainer> </div>
            <div className="widgetBox">
            <LinkContainer to="wind">
            <Menu.Item name='wind'>
              <Icon name='location arrow' />
              Wind
            </Menu.Item>
            </LinkContainer></div>
            <div className="widgetBox">
            <LinkContainer to="solar">
            <Menu.Item name='sun'>
              <Icon name='sun' />
              Solar
            </Menu.Item>
            </LinkContainer></div>
            <div className="widgetBox">
            <LinkContainer to="weather">
            <Menu.Item name='weather'>
              <Icon name='umbrella' />
              Weather
            </Menu.Item>
            </LinkContainer></div>
         </div>
        </Accordion.Content>
      </Accordion>

      </div>
    )
  }
}
