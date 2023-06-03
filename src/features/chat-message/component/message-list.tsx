import React from 'react';
import { MessegeItem } from '../type';
import MyMessageItem from './my-message-item';
import OtherMessageItem from './other-message-item';

export default function MessageList(data: MessegeItem[], idUser: number) {
  return (
    <>
      {data.map((item) =>
        idUser === item.userId ? MyMessageItem(item) : OtherMessageItem(item)
      )}
    </>
  );
}
