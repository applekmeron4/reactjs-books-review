import React from 'react';
import axios from 'axios';

const Book = props => {
  const click = async () => {
    console.log(props.token);
    try {
      await axios.delete(`https://api.marktube.tv/v1/book/${props.bookId}`, {
        headers: {
          Authorization: `Bearer ${props.token}`,
        },
      });

      // 갱신
      props.removeBook(props.bookId);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ border: '1px solid green', padding: 10, margin: 10 }}>
      <h2>{props.title}</h2>
      <h2>{props.message}</h2>
      <h2>{props.author}</h2>
      <h2>{props.url}</h2>
      <p>
        <button onClick={click}>delete</button>
      </p>
    </div>
  );
};
export default Book;
