import { useEffect, useState } from "react";
import "./App.css";
import BookList from "./components/BookList";
import Filter from "./components/Filter";
import ApiIntegration from "./apiworks/ApiIntegration";
import Navbar from "./components/Navbar";

function App() {
  const [books, setBooks] = useState([]);
  const [genres, setGenres] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedAuthor, setSelectedAuthor] = useState("");

  // using useEffect Hook to fetch the data using Axios from Apiintegration with functions map & flat
  useEffect(() => {
    const fetchData = async () => {
      try {
        const bookData = await ApiIntegration.fetchBooks();
        setBooks(bookData);
        const allGenres = bookData
          .map((book) => book.volumeInfo.categories)
          .flat();
        const uniqueGenres = [...new Set(allGenres)];
        setGenres(uniqueGenres);
        const allAuthors = bookData
          .map((book) => book.volumeInfo.authors)
          .flat();
        const uniqueAuthors = [...new Set(allAuthors)];
        setAuthors(uniqueAuthors);
      } catch (error) {
        console.error("Error Fetching Books: ", error);
      }
    };

    fetchData();
  }, []);

  // function called onChange the value from Filter componets and fetching only the selected Genre
  const handleGenreChange = (selectedGenre) => {
    console.log("Genre selected: ", selectedGenre);
    setSelectedGenre(selectedGenre);
  };

  // Function called onChange in the value of the Authors from the Filter componets and showing only the selcted Author's Data
  const handleAuthorChange = (selectedAuthor) => {
    console.log("Author Selected: ", selectedAuthor);
    setSelectedAuthor(selectedAuthor);
  };

  // This function is only showing the filtered author or genre data on the screen or the main page
  const filteredBooks = books.filter((book) => {
    const isGenreMatch =
      !selectedGenre ||
      !book.volumeInfo.categories ||
      book.volumeInfo.categories.includes(selectedGenre);
    const isAuthorMatch =
      !selectedAuthor ||
      !book.volumeInfo.authors ||
      book.volumeInfo.authors.includes(selectedAuthor);

    return isGenreMatch && isAuthorMatch;
  });

  return (
    <>
      <Navbar />
      <div class="bg-orange-100 flex flex-col md:flex-row">
        <div className="md:w-1/4 p-4">
          <h1 class="text-2xl font-bold mb-4">Filter</h1>
          <Filter
            genres={genres}
            authors={authors}
            onSelectGenre={handleGenreChange}
            onSelectAuthor={handleAuthorChange}
          />
        </div>
        <div className="md:w-3/4 p-4">
          <h1 className="capitalize hover:decoration-blue-400 text-2xl font-bold mb-8">
            Book Explorer
          </h1>
          <BookList books={filteredBooks} />
        </div>
      </div>
    </>
  );
}

export default App;