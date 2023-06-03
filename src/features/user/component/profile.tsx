import { GetUserApi } from '@/api';
import { UserActivity } from '@/type';
import { NextRouter, useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export function Profile() {
  const router: NextRouter = useRouter();
  const [user, setUser] = useState<UserActivity | null>(null);
  useEffect(() => {
    const ActualToken: String | null = sessionStorage.getItem('token');
    if (!ActualToken) {
      router.push('/login');
    }
    GetUserApi().then((res) => setUser(res));
  }, []);

  const update = () => {
    router.push('/update');
  };

  if (user) {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {user.user.name} profile
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              - - - - - - - - - - - - -
            </p>
          </div>
          <div className="grid grid-flow-row-dense grid-cols-4 grid-rows-3">
            <div className="relative pl-16 col-span-2">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 2c2.76 0 5 2.24 5 5 0 2.76-2.24 5-5 5s-5-2.24-5-5c0-2.76 2.24-5 5-5zm0 10a2 2 0 100-4 2 2 0 000 4z"
                    />
                  </svg>
                </div>
                Name
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                {user ? user.user.name : '...'}
              </dd>
            </div>
            <div className="relative pl-16 col-span-2">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M20 6.586V18a2 2 0 01-2 2H6a2 2 0 01-2-2V6.586l8 4.8 8-4.8zm0 0L12 11l-8-4.8M4 6l8 4.8L20 6M12 11v11"
                    />
                  </svg>
                </div>
                Email
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                {user ? user.user.email : '...'}
              </dd>
            </div>
            <div className="relative pl-16 col-span-2">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                Status
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                {user ? user.user.status : '...'}
              </dd>
            </div>
            <div className="relative pl-16 col-span-2">
              <div>
                <dt className="text-base font-semibold leading-7 text-gray-900 ">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 2C6.486 2 2 6.486 2 12v8c0 1.105.895 2 2 2h16c1.105 0 2-.895 2-2v-8c0-5.514-4.486-10-10-10zm0 18h-4v-8h4v8zm8-10h-6V4H8v6H2v8h20v-8h-6V10z"
                      />
                    </svg>
                  </div>
                  Bio
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {user ? user.user.bio : '...'}
                </dd>
              </div>
            </div>
          </div>
          <div className="flex justify-center basis-3/3 hover:basis-2/2 ">
            <button
              onClick={update}
              className="mx-auto lg:mx-0 hover:underline text-gray-800 font-extrabold rounded mt-4 lg:mt-0 py-4 px-8 shadow opacity-75"
            >
              Modify Compte
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
