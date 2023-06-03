import { apiUrl } from '@/constants';
import { LogingUser } from '@/type';
import { RequestInit } from 'next/dist/server/web/spec-extension/request';

export const logingApi = async (body: LogingUser) => {
  let myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  let raw = JSON.stringify(body);

  let requestOptions: RequestInit = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  return await fetch(apiUrl + '/users/login', requestOptions)
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => {
      throw error;
    });
};
