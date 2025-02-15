import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      {/* Logo */}
      <div className="mb-8">
        {/* <Image
          src="/your-logo-path.png" // Replace with your logo path
          alt="Your Logo"
          width={150}
          height={50}
          priority
        /> */}
      </div>

      {/* Error content - maintaining Next.js default style */}
      <div className="flex items-center space-x-4">
        <h1 className="text-2xl">404</h1>
        <div className="h-6 w-px bg-white/40" /> {/* Vertical divider */}
        <p>This page could not be found.</p>
      </div>

      {/* Home button */}
      <Link 
        href="/" 
        className="mt-8 rounded border border-white/30 px-4 py-2 text-sm hover:bg-white/10 transition"
      >
        Return Home
      </Link>
    </div>
  );
}

