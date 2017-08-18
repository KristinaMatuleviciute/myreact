'use strict'

import React, { Component, PropTypes } from 'react';
import Home from './Index';
import Profile from './Profile';
import { Route, RouteHandler, Link } from 'react-router';
import { Nav, Button, NavItem, Navbar, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class Navigation extends Component {
  static propTypes = { };
  render () {
      return (
        <Navbar collapseOnSelect style={{ backgroundColor: '#BAE7CB'}}>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">piSCES</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to="index"><NavItem eventKey={1}>Home</NavItem></LinkContainer>
              <LinkContainer to="weather"><NavItem eventKey={2}>Weather</NavItem></LinkContainer>
              <LinkContainer to="solar"><NavItem eventKey={3}>Solar</NavItem></LinkContainer>
              <LinkContainer to="wind"><NavItem eventKey={4}>Wind</NavItem></LinkContainer>
              <LinkContainer to="price"><NavItem eventKey={5}>Price</NavItem></LinkContainer>
              <LinkContainer to="load"><NavItem eventKey={6}>Load</NavItem></LinkContainer>
              <LinkContainer to="profile"><NavItem eventKey={7}>Profile</NavItem></LinkContainer>
              <LinkContainer to="settings"><NavItem eventKey={8}>Settings</NavItem></LinkContainer>
            </Nav>
            <Nav pullRight>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        // <Navbar style={{ backgroundColor: '#BAE7CB'}}>
        // <Navbar.Header>
        // <Navbar.Brand>
        // </Navbar.Brand>
        // <Navbar.Toggle />
        // </Navbar.Header>
        // <Navbar.Collapse>
        // <Nav pullLeft>
        // <LinkContainer to="index">
        // <NavItem style={{backgroundColor: '#BAE7CB', width: '150px'}} eventKey={1}>
        // <h2>Home</h2>
        // </NavItem>
        // </LinkContainer>
        // </Nav>

        // <Nav pullLeft>
        // <LinkContainer to="profile">
        // <NavItem style={{backgroundColor: '#BAE7CB', width: '150px'}} eventKey={2}>
        // <h2>Contacts</h2>
        // </NavItem>
        // </LinkContainer>
        // </Nav>
        // <Nav pullLeft>
        // <LinkContainer to="gallery">
        // <NavItem style={{backgroundColor: '#BAE7CB', width: '150px'}} eventKey={3}>
        // <h2>Gallery</h2>
        // </NavItem>
        // </LinkContainer>
        // </Nav>
        // </Navbar.Collapse>
        // </Navbar>
        )
      }
    }
