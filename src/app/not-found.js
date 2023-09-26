// pages/404.js
import React from 'react';
import Link from 'next/link';

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-red-500">404 - Not Found</h1>
        <p className="text-lg text-gray-600 mt-4">
          The page you are looking for might have been removed or does not exist.
        </p>
        <Link href="/">
          <div className="text-blue-600 hover:underline mt-4 block">Go back to the home page</div>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
