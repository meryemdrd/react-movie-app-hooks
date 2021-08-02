import React, { useState } from "react";
import MoviesList from "./components/MoviesList.js";
import { moviesData } from "./components/MoviesData.js";
import Search from "./components/Search.js";
import AddMovie from "./components/AddMovie.js";
import "./App.css";

function App() {
  const [movies, SetMovies] = useState(moviesData);
  const [searchName, setSearchName] = useState("");
  const [searchRating, setSearchRating] = useState(0);
  const AddNewMovie = (addNewMovie) => SetMovies([...movies, addNewMovie]);

  return (
    <div className="App">
    <AddMovie AddNewMovie={AddNewMovie} />
      <Search
        setSearchName={setSearchName}
        searchRating={searchRating}
        setSearchRating={setSearchRating}
      />
      <MoviesList searchName= {searchName}  searchRating={searchRating} movies ={movies} />
      
    </div>
  );
}

export default App;