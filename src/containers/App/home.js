import React, { Component } from 'react';

export default class Home extends Component {
  static propTypes = {
    children: React.PropTypes.any,
  }
  render() {
    return (
      <section>
        <h2>Form validation Example</h2>
        <p><a onClick={(evt) => { evt.preventDefault(); window.location.hash = '#/syncform'; }} href>Syncronous form example with all the validators</a></p>
        <p><a onClick={(evt) => { evt.preventDefault(); window.location.hash = '#/asyncinput'; }} href>Asyncronous inputs</a></p>
        <p><a onClick={(evt) => { evt.preventDefault(); window.location.hash = '#/asyncforminput'; }} href>Asyncronous inputs & form</a></p>
        <p><a onClick={(evt) => { evt.preventDefault(); window.location.hash = '#/asyncform'; }} href>Asyncronous form</a></p>
      </section>
    );
  }
}
