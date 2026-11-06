export interface Movie {
  id: string;
  title: string;
  year: number;
  category: string;
  gradient: string;
  featured?: boolean;
}

export const MOVIES: Movie[] = [
  { id: 'f0', title: 'The Dark Knight', year: 2008, category: 'Action', gradient: 'from-gray-900 to-black', featured: true },
  { id: 'f1', title: 'Inception', year: 2010, category: 'Sci-Fi', gradient: 'from-blue-900 to-indigo-950' },
  { id: 'f2', title: 'Interstellar', year: 2014, category: 'Sci-Fi', gradient: 'from-red-900 to-rose-950' },
  { id: 'f3', title: 'Gladiator', year: 2000, category: 'Action', gradient: 'from-emerald-900 to-teal-950' },
  { id: 'f4', title: 'The Matrix', year: 1999, category: 'Sci-Fi', gradient: 'from-green-900 to-emerald-950' },
  { id: 'f5', title: 'Pulp Fiction', year: 1994, category: 'Crime', gradient: 'from-amber-900 to-yellow-950' },
  { id: 'f6', title: 'Avatar', year: 2009, category: 'Sci-Fi', gradient: 'from-cyan-900 to-blue-950' },
  { id: 'f7', title: 'Oppenheimer', year: 2023, category: 'Drama', gradient: 'from-orange-900 to-red-950' },
];