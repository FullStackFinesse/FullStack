import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://3001-fullstackfine-fullstack-jscf8j5vtjk.ws-us106.gitpod.io/api/books/all'
        );

        console.log('Data received from server:', response.data);

        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error.message);
      }
    };

    fetchData();
  }, []);

  console.log(books);

  return (
    <div>
      <h2>List of Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
