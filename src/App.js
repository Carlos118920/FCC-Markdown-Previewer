import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var marked = require("marked");

var l = marked("# Hello\n\n Rendered by **marked**.")

class App extends Component {
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
