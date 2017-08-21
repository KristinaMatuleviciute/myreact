'use strict';

import React from 'react';
import img from '../assets/img/linechart.png'
import {
  Accordion,
  Sidebar,
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
    this.state = { visible: true }

      this.toggleVisibility = () => this.setState({ visible: !this.state.visible })

}
  render () {
    var style = { marging:'50px'};
    const { visible } = this.state
    const panes = [
  { menuItem: 'Yesterday', render: () => <Tab.Pane>Yesterday graphs</Tab.Pane> },
  { menuItem: 'Today', render: () => <Tab.Pane>Today graphs</Tab.Pane> },
  { menuItem: 'Tomorrow', render: () => <Tab.Pane>Tomorrow graphs</Tab.Pane> },
]
    return(
      <div>
        <div className="active content">
          <Accordion >
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
        <div style={style} >
           <div >
          <Tab panes={panes} />
         </div>
        </div>
      </div>
    )
  }
}
