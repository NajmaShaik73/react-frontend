import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        borderRadius: "6px",
      }}
    >
      <h3>{movie.title}</h3>
      <p>Year: {movie.year}</p>
      <Link to={`/movies/${movie.id}`}>View Details</Link>
    </div>
  );
}
