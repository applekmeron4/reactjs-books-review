import React from 'react';
import Axios from 'axios';
import { Link, withRouter } from 'react-router-dom';

const Navs = ({ token, history }) => {
  const logout = async () => {
    try {
      await Axios.delete('https://api.marktube.tv/v1/me', {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
    localStorage.removeItem('token');
    history.push('/signin');
  };

  return (
    <ul>
      <li>
        <Link to="/add">Add books</Link>
      </li>
      <li>
        <button onClick={logout}>Logout</button>
      </li>
    </ul>
  );
};

export default withRouter(Navs);
