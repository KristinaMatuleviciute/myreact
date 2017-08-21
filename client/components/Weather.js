'use strict';

import React from 'react';
import img from '../assets/img/linechart.png'
import { Accordion, Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import { LinkContainer } from 'react-router-bootstrap';


export default class Weather extends React.Component {
  constructor (props) {
    super(props)
    this.state = { visible: false }

      this.toggleVisibility = () => this.setState({ visible: !this.state.visible })

}
  render () {
    const { visible } = this.state
    return(
      <div>
          <div> weather</div>
      </div>
    )
  }
}
