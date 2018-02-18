import React, { Component } from 'react';

import LoginDetail from './LoginDetail';

class LoginContainer extends Component {
  render() {
    return (
      <div className="login-background">
        <LoginDetail />
      </div>
    );
  }
}

export default LoginContainer;