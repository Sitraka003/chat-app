import { GetChannelsApi, GetUserApi, GetUsersApi } from '@/api';
import { ChannelItemType } from '@/features/chat-channel';
import ChanneList from '@/features/chat-channel/component/ChanneList';
import { UserItemType } from '@/features/user';
import UserList from '@/features/user/component/UserList';
import { ChannelMember, ChannelType, UserActivity } from '@/type';
import useStore from '@/zustand/useChannel';
import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import { it } from 'node:test';
import { useEffect, useState } from 'react';

export default function SideBar() {
  const router: NextRouter = useRouter();
  const [user, setUser] = useState<UserActivity | null>(null);
  const [channels, setChannels] = useState<ChannelType[]>([]);
  const [users, setUsers] = useState<ChannelMember[]>([]);
  const [channelsItem, setChannelsItem] = useState<ChannelItemType[]>([]);
  const [usersItem, setUsersItem] = useState<UserItemType[]>([]);
  const { idChannel, idUser, setIdChannel, setIdUser } = useStore();
  const tokenVerification = () => {
    const ActualEmail: string | null = sessionStorage.getItem('email');
    if (!ActualEmail) {
      router.push('/login');
    }
  };

  useEffect(() => {
    tokenVerification();
  }, []);
  useEffect(() => {
    tokenVerification();
    GetUserApi().then((res) => setUser(res));
  }, []);
  useEffect(() => {
    tokenVerification();
    GetChannelsApi().then((res) => setChannels(res.channels));
  }, []);
  useEffect(() => {
    tokenVerification();
    GetUsersApi().then((res) => setUsers(res.users));
  }, []);
  useEffect(() => {
    tokenVerification();
    let newCannel: ChannelItemType[] = [];
    channels &&
      channels.forEach((item) => newCannel.push(convertChannel(item)));
    setChannelsItem(newCannel);
  }, [channels]);
  useEffect(() => {
    tokenVerification();
    let newUser: UserItemType[] = [];
    users.forEach((item) => newUser.push(convertUser(item)));
    setUsersItem(newUser);
  }, [users]);
  const convertChannel = (user: ChannelType) => {
    return { id: user.id, name: user.name, active: false, details: user.type };
  };
  const convertUser = (channel: ChannelMember) => {
    return {
      id: channel.id,
      name: channel.name,
      active: false,
      details: channel.bio,
    };
  };
  const CreateChannel = () => {
    router.push('/create-channel');
  };
  const profile = () => {
    router.push('/profile');
  };

  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className=" top-0 left-0 z-40 w-64 h-5/5 transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <h2 className="text-2xl text-Amber-200 font-bold mt-6 flex items-center text-center">
            Your vompte
          </h2>
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                href="/profile"
                className=" flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Profile</span>
              </Link>
            </li>
            <li>
              <Link
                href="/update"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Update</span>
              </Link>
            </li>
          </ul>

          <h2 className="text-2xl text-Amber-200 font-bold mt-6 flex items-center text-center">
            Your channels
          </h2>
          <button
            onClick={CreateChannel}
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <svg
              aria-hidden="true"
              className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
              <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
            </svg>
            <span className="flex-1 ml-3 whitespace-nowrap">
              {' '}
              + New Channel
            </span>
          </button>
          {ChanneList(
            channelsItem,
            (id) => {
              setIdChannel(id);
            },
            idChannel
          )}

          <h2 className="text-2xl text-Amber-200 font-bold mt-6 flex items-center text-center">
            Your friends
          </h2>
          {UserList(
            usersItem,
            (id) => {
              setIdUser(id);
            },
            idUser
          )}
        </div>
      </aside>
    </>
  );
}
