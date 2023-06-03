import React from 'react';
import Link from 'next/link';
import { UserItemType } from '../type';

export default function UserItemActif(
  data: UserItemType,
  onClick: (item: any) => void
) {
  return (
    <li
      key={data.id}
      onClick={() => {
        onClick(data.id);
      }}
    >
      <Link
        href="#"
        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 bg-sky-300"
      >
        <svg
          aria-hidden="true"
          className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span className="flex-1 ml-3 whitespace-nowrap">{data.name}</span>
        {data.active && (
          <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
            {data.details}
          </span>
        )}
      </Link>
    </li>
  );
}
