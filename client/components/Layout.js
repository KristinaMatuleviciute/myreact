'use strict'

import React from 'react';
import Nav from './Navigation';
import Sidenav from './Sidenav';
import Footer from './Footer';

export default class Layout extends React.Component {
  render () {
    const {location} = this.props
    const containerStyle = {
      marginTop: '10px',
    }
    return (
      <div>
        {/*loading navigation bar */}
      <Nav location={location}/>
      <div className='container-fluid' style={containerStyle}>
      <div className='row'>
      <div className='col-lg-12'>
      <div className='row'>
      <Sidenav/>
        {/* rendering children components */}
      {this.props.children}
      </div>
      </div>
      </div>
      {/* loading footer component */}
      </div>
      </div>
    )
  }
}
