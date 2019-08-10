import React, { useEffect } from 'react';
import axios from 'axios';
import Book from './Book';

export default props => {
  const { token, books, receiveBooks, deleteBook, undoDeleteBook } = props;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.marktube.tv/v1/book', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response);

        receiveBooks(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [receiveBooks, token]);

  return (
    <>
      {books
        .filter(book => book.deletedAt === null)
        .map(book => (
          <Book
            {...book}
            key={book.bookId}
            token={token}
            deleteBook={deleteBook}
            undoDeleteBook={undoDeleteBook}
          />
        ))}
    </>
  );
};
