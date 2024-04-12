import React from "react";

// passing props and use in this components
const Filter = ({ genres, authors, onSelectGenre, onSelectAuthor }) => {
  return (
    <div className="">
      <label htmlFor="genre" className="block font-bold mb-2">
        Select Genre:
      </label>
      <select
        id="genre"
        className="border border-gray-500 rounded p-2 mb-4 w-52"
        onChange={(e) => onSelectGenre(e.target.value)}
      >
        <option className="max-w-5" value="">
          All Genres
        </option>
        {genres.map((genre) => (
          <option className="max-w-5 " key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>

      <label htmlFor="author" className="block font-bold mb-2">
        Select Author:
      </label>
      <select
        id="author"
        className="border border-gray-500 rounded p-2 w-52"
        onChange={(e) => onSelectAuthor(e.target.value)}
      >
        <option value="">All Authors</option>
        {authors.map((author) => (
          <option key={author} value={author}>
            {author}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;