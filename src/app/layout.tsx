import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'FILMFLIX',
  description: 'Netflix-inspired movie dashboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#141414] text-white antialiased min-h-screen">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 px-[4%] py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-black text-[#e50914] tracking-wider">
            FILMFLIX
          </Link>
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium hover:text-gray-300 transition">
              Home
            </Link>
            <Link href="/my-list" className="text-sm font-medium hover:text-gray-300 transition">
              My List
            </Link>
          </div>
        </nav>

        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}