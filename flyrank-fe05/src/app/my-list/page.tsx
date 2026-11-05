'use client';

import { useState, useEffect } from 'react';
import { MOVIES, Movie } from '../data/movies';

export default function MyListPage() {
  const [myMovies, setMyMovies] = useState<Movie[]>([]);

  useEffect(() => {
    try {
      const savedIds: string[] = JSON.parse(localStorage.getItem('filmflix-list') || '[]');
      const savedMovies = MOVIES.filter((m) => savedIds.includes(m.id));
      setMyMovies(savedMovies);
    } catch (e) {}
  }, []);

  const removeFromList = (id: string) => {
    const updated = myMovies.filter((m) => m.id !== id);
    setMyMovies(updated);
    try {
      const remainingIds = updated.map((m) => m.id);
      localStorage.setItem('filmflix-list', JSON.stringify(remainingIds));
    } catch (e) {}
  };

  return (
    <div className="px-[4%] py-8 space-y-6">
      <h1 className="text-3xl font-bold tracking-wide">My List</h1>

      {myMovies.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {myMovies.map((movie) => (
            <div
              key={movie.id}
              className={`h-64 bg-gradient-to-br ${movie.gradient} rounded-lg p-4 flex flex-col justify-between hover:scale-105 transition shadow-lg`}
            >
              <div>
                <span className="font-extrabold text-sm uppercase tracking-wider block">{movie.title}</span>
                <small className="text-gray-300 tracking-widest">{movie.year}</small>
              </div>
              
              <button 
                onClick={() => removeFromList(movie.id)}
                className="self-end px-3 py-1 bg-red-600/80 text-white text-xs font-bold rounded hover:bg-red-600 transition cursor-pointer"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-400 py-10">Your list is empty. Add movies from the home page!</p>
      )}
    </div>
  );
}