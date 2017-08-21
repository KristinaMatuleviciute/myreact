'use strict';

import React from 'react';
import {
  Accordion,
  Divider,
  Sidebar,
  Segment,
  Button,
  Menu,
  Image,
  Icon,
  Transition,
  Header,
  Tab
 } from 'semantic-ui-react'
import { LinkContainer } from 'react-router-bootstrap';


export default class Price extends React.Component {
  constructor (props) {
    super(props)
    this.state = { visible: true }

      this.toggleVisibility = () => this.setState({ visible: !this.state.visible })

}
  render () {
    var style = { marginLeft:'50px'};
    var styleWidgets = { marginLeft:'150px'};

    const { visible } = this.state
    const panes = [
  { menuItem: 'Yesterday', render: () => <Tab.Pane>Yesterday graphs</Tab.Pane> },
  { menuItem: 'Today', render: () => <Tab.Pane>Today graphs</Tab.Pane> },
  { menuItem: 'Tomorrow', render: () => <Tab.Pane>Tomorrow graphs</Tab.Pane> },
]
    return(
      <div className ="row">


        <div style={style} >
          <div >
           <Tab panes={panes} />
          </div>
        </div>

        <div style={styleWidgets}>

      <Icon name='dropdown' content={visible ? 'Hide' : 'Show'} onClick={this.toggleVisibility}/>
       <Divider hidden />
       <Transition visible={visible} animation='scale' duration={500}>
       <div>
          <div className="box">
          <LinkContainer to="load">
          <Menu.Item name='load'>
            <Icon name='shopping basket' />
            Load
          </Menu.Item>
          </LinkContainer> </div>
          <div className="box">
          <LinkContainer to="price">
          <Menu.Item name='price'>
            <Icon name='euro' />
            Price
          </Menu.Item>
          </LinkContainer> </div>
          <div className="box">
          <LinkContainer to="wind">
          <Menu.Item name='wind'>
            <Icon name='location arrow' />
            Wind
          </Menu.Item>
          </LinkContainer></div>
          <div className="box">
          <LinkContainer to="solar">
          <Menu.Item name='sun'>
            <Icon name='sun' />
            Solar
          </Menu.Item>
          </LinkContainer></div>
          <div className="box">
          <LinkContainer to="weather">
          <Menu.Item name='weather'>
            <Icon name='umbrella' />
            Weather
          </Menu.Item>
          </LinkContainer></div>
       </div>
       </Transition>
     </div>

      </div>
    )
  }
}
