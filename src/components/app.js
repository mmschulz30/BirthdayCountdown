import React, { Component } from 'react';
import Picker from './picker';
import Button from './button';
import Clock from './clock';
import changeDate from './changeDate';
import LargeText from './largeText';

import moment from 'moment';

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      active: false,
      startDate: moment()
    }
  }

  handleChange = function(date) {
    console.log('APP JS HANDLE CHANGE', date._d);
    this.setState({
        startDate: date
    });
}.bind(this)

handleGenerate = function() {
  this.setState({ active: true })
    //set the date we're counting down to
  var countDownDate = this.state.startDate.toDate().getTime();

  //Update the count down every 1 second
  var x = setInterval (function() {

  })
}

  renderItems = function() {
    if(this.state.active) {
      return [
        <Clock/>,
        changeDate('Change Date', () => this.setState({ active: false })),
        LargeText('04/03'),
        <label className="grid__remaining">Remaining until your 21st Birthday</label>
      ]
    }else {
      return[
        <Picker callback={(date) => this.handleChange(date)}/>,
        Button('Generate Countdown', () => this.setState({active: true }))
      ]
    }
  }.bind(this)

  render() {
    return (
      <div className="grid">
      <h1 className="grid__title">Brithday Countdown</h1>
      
        <div className="grid__skew-dark-two"></div>
        <div className="grid__skew-dark-three"></div>

        <div className="grid__skew-light-one"></div>
        <div className="grid__skew-light-two"></div>
        <div className="grid__skew-light-three-box"></div>

        { this.renderItems() }
      </div>
    );
  }
}
