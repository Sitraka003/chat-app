import { apiUrl } from '../../constants';
import { RequestInit } from 'next/dist/server/web/spec-extension/request';
import { CreateUser, ModifyUser } from '@/type';

export const GetUserApi = async () => {
  const token = sessionStorage.getItem('token');

  let myHeaders = new Headers();
  myHeaders.append('Authorization', 'Bearer ' + token);

  let requestOptions: RequestInit = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  return await fetch(apiUrl + '/user', requestOptions)
    .then((response) => response.json())
    .then((res) => res)
    .catch((error) => {
      throw error;
    });
};

export const GetUsersApi = async () => {
  const token = sessionStorage.getItem('token');

  let myHeaders = new Headers();
  myHeaders.append('Authorization', 'Bearer ' + token);

  let requestOptions: RequestInit = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  return await fetch(apiUrl + '/users', requestOptions)
    .then((response) => response.json())
    .then((res) => res)
    .catch((error) => {
      throw error;
    });
};

export const UpdateUserApi = async (body: ModifyUser) => {
  const token = sessionStorage.getItem('token');
  let myHeaders = new Headers();
  myHeaders.append('Authorization', 'Bearer ' + token);
  myHeaders.append('Content-Type', 'application/json');

  let raw = JSON.stringify(body);

  let requestOptions: RequestInit = {
    method: 'Put',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  return await fetch(apiUrl + '/user', requestOptions)
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => {
      throw error;
    });
};

export const CreateUsersApi = async (body: CreateUser) => {
  let myHeaders = new Headers();
  myHeaders.append(
    'Authorization',
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJlbGluLm1hc2tAdGVzdC5jb20iLCJpYXQiOjE2ODQxOTIwMTl9.j3i-l85EmZgTDJWtAvK7mBBoJRAyUk8G_SrEaHdokJ0'
  );
  myHeaders.append('Content-Type', 'application/json');

  let raw = JSON.stringify(body);

  let requestOptions: RequestInit = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  return await fetch(apiUrl + '/users', requestOptions)
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => {
      throw error;
    });
};
