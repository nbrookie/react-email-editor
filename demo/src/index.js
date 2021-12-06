import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Example from './example';
import Dashboard from './dashboard';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  }

  #demo {
    height: 100%;
  }
`;

class Demo extends Component {
  render() {
    return (
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Example />} exact={true} />
          <Route path={`/dashboard`} element={<Dashboard />} />
        </Routes>
      </Router>
    );
  }
}

ReactDOM.render(<Demo />, document.querySelector('#demo'));
