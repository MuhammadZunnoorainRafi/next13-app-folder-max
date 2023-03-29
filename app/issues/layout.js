import Link from 'next/link';
import React from 'react';
// import '../globals.css';
function IssuesLayout({ children }) {
  return (
    <div className="  grid grid-cols-4">
      <aside className=" col-span-1  bg-purple-900">
        <div className="flex flex-col space-y-3 text-white">
          <Link href="/issues/:id" className="font-bold text-2xl">
            Issue 1
          </Link>
          <Link href="/issues/:id" className="font-bold text-2xl">
            Issue 2
          </Link>
        </div>
      </aside>

      <main className="col-span-3">{children}</main>
    </div>
  );
}

export default IssuesLayout;
