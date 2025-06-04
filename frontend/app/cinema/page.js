"use client"

import { useState } from "react"

export default function MoviesPage() {
  const [movies, setMovies] = useState([
    "Interstellar",
    "Inception",
    "The Dark Knight",
    "La La Land",
  ])
  const [newMovie, setNewMovie] = useState("")

  const handleAddMovie = () => {
    if (newMovie.trim() !== "") {
      setMovies([...movies, newMovie.trim()])
      setNewMovie("")
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-6">🎬 Movies I've Watched</h1>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={newMovie}
          onChange={(e) => setNewMovie(e.target.value)}
          placeholder="Add a movie..."
          className="border border-gray-300 px-4 py-2 rounded-md bg-transparent"
        />
        <button
          onClick={handleAddMovie}
          className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/80 transition"
        >
          Add
        </button>
      </div>

      <ul className="w-full max-w-md space-y-3">
        {movies.map((movie, index) => (
          <li
            key={index}
            className="border border-muted rounded-lg px-4 py-2 shadow-sm hover:bg-muted/50 transition"
          >
            {movie}
          </li>
        ))}
      </ul>
    </div>
  )
}
