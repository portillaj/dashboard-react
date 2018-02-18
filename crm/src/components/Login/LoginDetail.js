import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import PropTypes from 'prop-types';

import './login.scss';

class LoginDetail extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="container">
        <div className="login-box">
          <div className="left-box">
            <h3 className="login-title text-center">Log in to Bigney Law Dashboard</h3>

            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="firstName">First Name</label>
                <Field 
                  name="firstName" 
                  component="input" 
                  type="text" 
                />
              </div>
              <div>
                <label htmlFor="lastName">Last Name</label>
                <Field 
                  name="lastName" 
                  component="input" 
                  type="text" 
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <Field 
                  name="email" 
                  component="input" 
                  type="email" 
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="right-box">Text Goes here</div>
        </div>
      </div>
    );
  }
}

LoginDetail.propTypes = {
  handleSubmit: PropTypes.func
};
export default reduxForm({
  form: 'Login'
})(LoginDetail)