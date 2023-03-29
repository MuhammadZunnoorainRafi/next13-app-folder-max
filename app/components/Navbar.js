import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <div className="bg-slate-600 text-white">
      <div className="flex items-center justify-between mx-auto container  py-7 xl:px-14 px-2 ">
        <h1 className="font-bold text-3xl">Next 13</h1>
        <div className="space-x-8">
          <Link className="font-semibold text-lg hover:text-slate-200" href="/">
            Home
          </Link>
          <Link
            className="font-semibold text-lg hover:text-slate-200"
            href="/issues"
          >
            Issues
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
