import React from "react";
import MovieCard from "../components/MovieCard.jsx";

// Dummy data for now
const movies = [
  { id: 1, title: "Inception", year: 2010 },
  { id: 2, title: "Interstellar", year: 2014 },
  { id: 3, title: "The Dark Knight", year: 2008 },
];

export default function MovieList() {
  return (
    <div>
      <h2>🎥 Movie List</h2>
      <div>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
