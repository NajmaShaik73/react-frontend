import React from "react";
import { useParams } from "react-router-dom";

export default function MovieDetails() {
  const { id } = useParams();

  return (
    <div>
      <h2>🎞 Movie Details</h2>
      <p>Details for movie with ID: {id}</p>
    </div>
  );
}
