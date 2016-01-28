import React, { Component } from 'react';

export default class Home extends Component {
  static propTypes = {
    children: React.PropTypes.any,
  }
  render() {
    return (
      <section>
        <h2>Form validation Example</h2>
        <p><a onClick={() => { window.location = '/#/syncform'; }} href>Syncronous form example with all the validators</a></p>
        <p><a onClick={() => { window.location = '/#/asyncinput'; }} href>Asyncronous inputs</a></p>
        <p><a onClick={() => { window.location = '/#/asyncforminput'; }} href>Asyncronous inputs & form</a></p>
        <p><a onClick={() => { window.location = '/#/asyncform'; }} href>Asyncronous form</a></p>
      </section>
    );
  }
}
