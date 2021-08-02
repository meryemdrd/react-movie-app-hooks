import React from "react";
import MovieCard from '../components/MovieCard';
 
 
 function MoviesList ({ movies, searchName, searchRating }) {
 console.log(movies)
  return (
    <div style={{ display: "flex",   }}>
    
     { 
       movies
     
    .filter(
         (movie)=> 
        movie.name.toLowerCase().trim().includes(searchName.toLowerCase().trim()) &&
        movie.rating >=searchRating
         )
    .map((movie) => ( <MovieCard  movie={movie} key={movie.id} /> )) 
    
    }
     
    </div>
  );
};

export default MoviesList;