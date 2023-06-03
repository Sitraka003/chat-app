import { apiUrl } from '../../constants';
import { RequestInit } from 'next/dist/server/web/spec-extension/request';
import { CreateChannelType, CreateUser, ModifyUser } from '@/type';

export const GetChannelsApi = async () => {
  const token = sessionStorage.getItem('token');

  let myHeaders = new Headers();
  myHeaders.append('Authorization', 'Bearer ' + token);

  let requestOptions: RequestInit = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  return await fetch(apiUrl + '/channels', requestOptions)
    .then((response) => response.json())
    .then((res) => res)
    .catch((error) => {
      throw error;
    });
};

export const GetChannelsByIdApi = async (idChannel: number) => {
  const token = sessionStorage.getItem('token');

  let myHeaders = new Headers();
  myHeaders.append('Authorization', 'Bearer ' + token);

  let requestOptions: RequestInit = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  return await fetch(apiUrl + `/channel/${idChannel}`, requestOptions)
    .then((response) => response.json())
    .then((res) => res)
    .catch((error) => {
      throw error;
    });
};

export const CreateChannelApi = async (body: CreateChannelType) => {
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

  return await fetch(apiUrl + '/channel', requestOptions)
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => {
      throw error;
    });
};

export const AddMemberInChannelApi = async (
  body: { members: number[] },
  idChannel: number
) => {
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

  return await fetch(apiUrl + `/channels/${idChannel}/members`, requestOptions)
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => {
      throw error;
    });
};
