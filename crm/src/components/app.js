import React, { Component } from 'react';
import '../../style/style.scss';
import LoginContainer from '../components/Login/LoginContainer';

export default class App extends Component {
  render() {
    return (
      <div className="login-background">
        <LoginContainer />
      </div>
    );
  }
}
