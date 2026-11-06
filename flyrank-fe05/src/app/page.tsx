'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { MOVIES, Movie } from './data/movies';

export default function HomePage() {
  const router = useRouter();
  const [list, setList] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('filmflix-list') || '[]');
      setList(saved);
    } catch (e) {}
  }, []);

  const toggleList = (id: string, e: React.MouseEvent) => {
    e.stopPropagation(); // منع الانتقال لصفحة التفاصيل عند الضغط على زر المفضلات
    const updated = list.includes(id)
      ? list.filter((item) => item !== id)
      : [...list, id];
    setList(updated);
    try {
      localStorage.setItem('filmflix-list', JSON.stringify(updated));
    } catch (e) {}
  };

  const inList = (id: string) => list.includes(id);

  const filteredMovies = MOVIES.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const featuredMovie = MOVIES.find((m) => m.featured) || MOVIES[0];

  return (
    <div className="space-y-8 pb-16">
      <section className="relative min-h-[65vh] flex items-end px-[4%] pb-10 bg-gradient-to-t from-[#141414] via-black/40 to-black/70">
        <div className="max-w-xl space-y-4">
          <p className="text-xs uppercase tracking-widest text-red-500 font-bold">Featured Today</p>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-wide">{featuredMovie.title}</h1>
          <p className="text-gray-300 text-sm font-medium">{featuredMovie.year} · Movie · {featuredMovie.category}</p>
          
          <div className="flex flex-wrap gap-3 pt-2">
            <button 
              onClick={() => alert("Playing movie...")}
              className="px-6 py-2.5 bg-white text-black font-bold rounded hover:bg-white/80 transition cursor-pointer"
            >
              ▶ Play
            </button>
            <button 
              onClick={(e) => toggleList(featuredMovie.id, e)}
              className="px-6 py-2.5 bg-gray-600/70 text-white font-bold rounded hover:bg-gray-600 transition cursor-pointer"
            >
              {inList(featuredMovie.id) ? '✓ In My List' : '+ My List'}
            </button>
          </div>
        </div>
      </section>

      <section className="px-[4%] space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h2 className="text-2xl font-bold tracking-wide">Explore Movies</h2>
          
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Search movies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#232323] text-white text-sm px-4 py-2.5 rounded-lg border border-gray-700 focus:outline-none focus:border-red-600 transition"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredMovies.map((movie) => (
            <div
              key={movie.id}
              onClick={() => router.push(`/movie/${movie.id}`)}
              className={`h-64 bg-gradient-to-br ${movie.gradient} rounded-lg p-4 flex flex-col justify-between hover:scale-105 transition shadow-lg relative group cursor-pointer`}
            >
              <div>
                <span className="font-extrabold text-sm uppercase tracking-wider block">{movie.title}</span>
                <small className="text-gray-300 tracking-widest">{movie.year}</small>
              </div>
              
              <button 
                onClick={(e) => toggleList(movie.id, e)}
                className="self-end w-9 h-9 rounded-full border border-white/60 bg-black/50 text-white flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition cursor-pointer z-10"
                aria-label="Add or remove from list"
              >
                {inList(movie.id) ? '✓' : '+'}
              </button>
            </div>
          ))}
        </div>

        {filteredMovies.length === 0 && (
          <p className="text-gray-400 text-center py-12">No movies found matching "{searchQuery}"</p>
        )}
      </section>
    </div>
  );
}