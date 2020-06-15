import React, { Component } from 'react';
import './App.css';
class Sing extends Component {
  render() {
    return (
        <div className="center1">

          <h2>Sing in</h2>
        <p>Log in</p>
        <textarea>
    Enter log in
  </textarea>
        <p>Password</p>
        <textarea>
    Enter Password
  </textarea>
  <button>Sing in</button>
        </div>
    );
  }
}

export default Sing;
