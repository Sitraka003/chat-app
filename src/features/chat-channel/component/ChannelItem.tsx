import React from 'react';
import { ChannelItemType } from '../type';
import Link from 'next/link';

export default function ChannelItem(
  data: ChannelItemType,
  onClick: (item: any) => void
) {
  return (
    <li key={data.id} onClick={() => onClick(data.id)}>
      <Link
        href="#"
        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 "
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
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
