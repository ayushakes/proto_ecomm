import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <>
      <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
        <Link href="/about">
          <a className="mr-5 hover:text-gray-900">About</a>
        </Link>
        <a className="mr-5 hover:text-gray-900">First Link</a>
        <a className="mr-5 hover:text-gray-900">Second Link</a>
        <a className="mr-5 hover:text-gray-900">Third Link</a>
        <a className="hover:text-gray-900">Fourth Link</a>
      </nav>

      <Link href="/">
        <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="ml-3 text-xl">Tailblocks</span>
        </a>
      </Link>
    </>
  );
};

export default Nav;
