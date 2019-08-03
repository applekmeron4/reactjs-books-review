import React from 'react';
import Navs from '../components/Navs';
import BookAddForm from '../components/BookAddForm';

const Add = props => {
  const { token } = props;

  return (
    <>
      <Navs token={token} />
      <h1>Add</h1>
      <BookAddForm token={token} />
    </>
  );
};

export default Add;
