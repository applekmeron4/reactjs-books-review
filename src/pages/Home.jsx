import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Book from '../components/Book';
import Navs from '../components/Navs';

const Home = props => {
  const { token } = props;
  const [books, setBooks] = useState([]);

  const removeBook = bookId => {
    setBooks(books.filter(elem => elem.bookId !== bookId));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.marktube.tv/v1/book', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response);

        setBooks(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [token]);

  return (
    <>
      <Navs token={token} />
      <h1>Home</h1>
      {books.map(book => (
        <Book
          {...book}
          key={book.bookId}
          token={token}
          removeBook={removeBook}
        />
      ))}
    </>
  );
};

export default Home;
