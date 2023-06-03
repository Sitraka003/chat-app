import React from 'react';
import { ChannelItemType } from '../type';
import ChannelItem from './ChannelItem';
import ChannelItemActif from './ChannelItemActif';

export default function ChanneList(
  data: ChannelItemType[],
  onClick: (item: any) => void,
  idActif: number | null
) {
  return (
    <ul className="space-y-2 font-medium">
      {data.map((item) =>
        item.id == idActif
          ? ChannelItemActif(item, onClick)
          : ChannelItem(item, onClick)
      )}
    </ul>
  );
}
