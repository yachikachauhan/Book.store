import React from "react";
import Book from "./Book";

const BookList = ({ books }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* using Map Function to pass the data to the book components */}
      {books.map((book) => (
        <Book key={book.id} className="bg-white shadow-md p-4" book={book} />
      ))}
    </div>
  );
};

export default BookList;