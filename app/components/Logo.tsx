'use client';

import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="relative">
        <div className="w-10 h-10 bg-indigo-600 rounded-lg transform rotate-3"></div>
        <div className="w-10 h-10 bg-white rounded-lg absolute top-0 left-0 transform -rotate-3 flex items-center justify-center">
          <span className="text-indigo-600 font-bold text-xl">F</span>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-gray-900">Fieldhouse</span>
        <span className="text-sm text-gray-600">Studio</span>
      </div>
    </Link>
  );
};

export default Logo; 