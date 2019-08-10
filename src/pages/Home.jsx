import React from 'react';
import Navs from '../components/Navs';
import BooksContainer from '../Containers/BooksContainer';

const Home = props => {
  const { token } = props;

  return (
    <>
      <Navs token={token} />
      <h1>Home</h1>
      <BooksContainer token={token} />
    </>
  );
};

export default Home;
