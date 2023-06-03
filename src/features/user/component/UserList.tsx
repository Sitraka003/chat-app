import React from 'react';
import UserItem from './UserItem';
import { UserItemType } from '../type';
import UserItemActif from './UserItemActif';

export default function UserList(
  data: UserItemType[],
  onClick: (item: any) => void,
  idActif: number | null
) {
  return (
    <ul className="space-y-2 font-medium">
      {data.map((item) =>
        item.id == idActif
          ? UserItemActif(item, onClick)
          : UserItem(item, onClick)
      )}
    </ul>
  );
}
