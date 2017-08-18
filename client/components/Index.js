'use strict';

import React from 'react';
import { Button, Panel } from 'react-bootstrap';




export default class Index extends React.Component {
  constructor (props) {
    super(props)

}
  render () {
    return(
      <div>
        <div >
          <div className="widgetBox"> Load </div>
          <div className="widgetBox"> Price </div>
          <div className="widgetBox"> Wind </div>
          <div className="widgetBox"> Solar </div>
          <div className="widgetBox"> Weather </div>
        </div>

        <div className="afterbox">
          <div >
          graphs


          </div>
        </div>

      </div>
    )
  }
}
