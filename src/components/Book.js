import React, { useState } from "react";
import BookDetails from "./BookDetails";

const Book = ({ book }) => {
  // make use of useState Hook
  const [showDetails, setShowDetails] = useState(false);

  if (!book || !book.volumeInfo) {
    return <div>Loading...</div>;
  }

  // desctructuring
  const { volumeInfo } = book;
  const { title, authors, averageRating, imageLinks } = volumeInfo;

  // function for handling show Details
  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };
  return (
    <div className="flex flex-col justify-center">
      <div className="max-w-xs mx-auto p-4 border mb-4">
        <img
          className="w-40 h-auto mb-4 mx-auto"
          src={imageLinks?.smallThumbnail}
          alt={title}
        />
        <h2 className="text-lg font-medium text-center ">{title}</h2>
        <p className="text-center overflow-hidden  h-12">
          Author: {authors.join(", ")}
        </p>
        <p className="text-center ">Rating: {averageRating}</p>

        <div className="flex justify-center items-center">
          <button
            onClick={handleShowDetails}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            {showDetails ? "Hide Description" : "Show Description"}
          </button>
        </div>

        {showDetails && <BookDetails book={book} />}
      </div>
    </div>
  );
};

export default Book;