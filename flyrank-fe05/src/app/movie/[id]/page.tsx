'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { MOVIES } from '../../data/movies';
import { Suspense } from 'react';

function MovieDetailsContent() {
  const params = useParams();
  const id = params?.id as string;
  const movie = MOVIES.find((m) => m.id === id);

  if (!movie) {
    return (
      <div className="px-[4%] py-20 text-center space-y-4">
        <h1 className="text-2xl font-bold">Movie Not Found</h1>
        <Link href="/" className="inline-block text-red-500 hover:underline">
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-[85vh] px-[4%] py-12 flex flex-col justify-center">
      <div className={`p-8 md:p-12 rounded-2xl bg-gradient-to-br ${movie.gradient} space-y-6 max-w-3xl shadow-2xl border border-white/10`}>
        <Link href="/" className="text-xs uppercase tracking-widest text-gray-400 hover:text-white transition">
          ← Back to Movies
        </Link>
        <div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-wide">{movie.title}</h1>
          <p className="text-gray-300 font-medium mt-2">{movie.year} · {movie.category}</p>
        </div>
        <p className="text-gray-300 leading-relaxed">
          This is a detailed preview page for {movie.title}. Integrated dynamically using Next.js App Router dynamic params (`/movie/[id]`).
        </p>
        <div className="flex gap-4 pt-4">
          <button 
            onClick={() => alert(`Playing ${movie.title}...`)}
            className="px-6 py-2.5 bg-white text-black font-bold rounded hover:bg-white/80 transition cursor-pointer"
          >
            ▶ Watch Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default function MovieDetailPage() {
  return (
    <Suspense fallback={<div className="text-center py-20 text-white">Loading...</div>}>
      <MovieDetailsContent />
    </Suspense>
  );
}