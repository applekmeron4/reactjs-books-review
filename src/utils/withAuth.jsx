import React from 'react';
import { Redirect } from 'react-router-dom';

function withAuth(Component) {
  return props => {
    const token = localStorage.getItem('token');
    console.log(token);

    if (token === null) {
      return <Redirect to={'./signin'} />;
    }

    return <Component {...props} token={token} />;
  };
}

export default withAuth;
