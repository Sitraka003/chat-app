import { apiUrl } from '../../constants';
import { RequestInit } from 'next/dist/server/web/spec-extension/request';
import { SedMessageType } from '@/type';

export const getMessagesByChannel = async (idChanel: string) => {
  const token = sessionStorage.getItem('token');

  let myHeaders = new Headers();
  myHeaders.append('Authorization', 'Bearer ' + token);

  let requestOptions: RequestInit = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  return await fetch(apiUrl + '/messages/channel/' + idChanel, requestOptions)
    .then((response) => response.json())
    .then((res) => res)
    .catch((error) => {
      throw error;
    });
};

export const getMessagesByUser = async (idUser: number) => {
  const token = sessionStorage.getItem('token');

  let myHeaders = new Headers();
  myHeaders.append('Authorization', 'Bearer ' + token);

  let requestOptions: RequestInit = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  return await fetch(apiUrl + `/messages/${idUser}`, requestOptions)
    .then((response) => response.json())
    .then((res) => res)
    .catch((error) => {
      throw error;
    });
};

export const sendMessage = async (body: SedMessageType) => {
  let myHeaders = new Headers();
  const token = sessionStorage.getItem('token');
  myHeaders.append('Authorization', 'Bearer ' + token);
  myHeaders.append('Content-Type', 'application/json');

  let raw = JSON.stringify(body);

  let requestOptions: RequestInit = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  return await fetch(apiUrl + '/message', requestOptions)
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => {
      throw error;
    });
};
