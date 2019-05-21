import React, { Component } from 'react';
import { connect } from 'react-redux';

const Authorization = (WrappedComponent, allowedRoles) =>
return class WithAuthorization extends React.Component {
  state = {
    user: {
      name: 'vcarl',
      role: 'admin'
    }
  };

  render() {
    const { role } = this.state.user;
    if (allowedRoles.includes(role)) {
      return <WrappedComponent {...this.props} />
    } else {
      return <h1>No page for you!</h1>
    }
  }
};