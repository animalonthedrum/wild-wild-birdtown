import React, { Component } from 'react';
import Form from './_contact/Form';


export default class RSVP extends Component {
  render() {
    return (
      <div className='rsvp-container'>

      <div className='rsvp-l'>
        <h1>Join the Cult</h1>
        <p>Join us for the 2nd Annual Halloween Party</p>
        <p>Nov 3rd @ 7:00PM</p>
        <p>3923 Orchard Ave N,</p>
        <p>Robbinsdale, MN 55422</p>
        <Form />
      </div>
      <div className="rsvp-r">

        {/* <img src={require("../images/osho-face.jpg")} alt="osho" className="osho-face"/> */}
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed arcu non odio euismod lacinia at. Morbi tempus iaculis urna id volutpat. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Urna neque viverra justo nec.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed arcu non odio euismod lacinia at. Morbi tempus iaculis urna id volutpat. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Urna neque viverra justo nec.</p>
      </div>
      </div>
    )
  }
}
