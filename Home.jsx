import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>🎬 Welcome to React Movie App</h1>
      <Link to="/movies">Go to Movies</Link>
    </div>
  );
}
