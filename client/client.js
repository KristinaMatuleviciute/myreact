'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import './index.html';
import './assets/css/main.styl'
import Index from './components/Index';
import Profile from './components/Profile';
import Layout from './components/Layout';
import Load from './components/Load';
import Price from './components/Price';
import Solar from './components/Solar';
import Settings from './components/Settings';
import Weather from './components/Weather';
import Wind from './components/Wind';

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Index}></IndexRoute>
      <Route path='index' name='index' component={Index}></Route>
      <Route path='profile' name='profile' component={Profile}></Route>
      <Route path='load' name='load' component={Load}></Route>
      <Route path='price' name='price' component={Price}></Route>
      <Route path='solar' name='solar' component={Solar}></Route>
      <Route path='settings' name='settings' component={Settings}></Route>
      <Route path='weather' name='weather' component={Weather}></Route>
      <Route path='wind' name='wind' component={Wind}></Route>
    </Route>
  </Router>,
app)
