import React from "react";

const BookDetails = ({ book }) => {
  const { volumeInfo, saleInfo } = book;
  // destructuring variables values
  const {
    language,
    categories,
    description,
    pageCount,
    publisher,
    publishedDate,
  } = volumeInfo;
  const { country } = saleInfo;

  return (
    <>
      <p>Genre: {categories}</p>
      <p>Language: {language}</p>
      <p>Country: {country}</p>
      <p className="text-left overflow-hidden">Description: {description}</p>
      <p>Page Count: {pageCount}</p>
      <p className="underline decoration-orange-500">Publisher: {publisher}</p>
      <p className="underline decoration-orange-500">
        Published Date: {publishedDate}
      </p>
    </>
  );
};

export default BookDetails;