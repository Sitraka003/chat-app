import { Inter } from 'next/font/google';
import { NextRouter, useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import SideBarLayout from '@/layouts/side-bar-layout';
import {
  GetChannelsByIdApi,
  GetUserApi,
  GetUsersApi,
  getMessagesByChannel,
  getMessagesByUser,
  sendMessage,
} from '@/api';
import { MessageType, SedMessageType } from '@/type';
import { MessegeItem } from '@/features/chat-message';
import MessageList from '@/features/chat-message/component/message-list';
import useStore from '@/zustand/useChannel';
import Send from '@/features/chat-message/component/send';
import Autorized from '@/layouts/Autorized';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [update, setUpdate] = useState(0);

  const [idUserActual, setIdUserActual] = useState(0);
  const [email, setEmail] = useState<string | null>(null);
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [messagesItem, setMessagesItem] = useState<MessegeItem[]>([]);
  const { idChannel, idUser, setIdChannel, setIdUser } = useStore();
  const [ChannelName, setChannelName] = useState('Channel name');
  const [UserName, setUserName] = useState('friend');
  const router: NextRouter = useRouter();
  const tokenVerification = () => {
    const ActualEmail: string | null = sessionStorage.getItem('token');
    if (!ActualEmail) {
      router.push('/login');
    }
    setTimeout(() => setInterval(() => setUpdate(update + 1), 10000), 5000);
  };

  useEffect(() => {
    tokenVerification();
    const ActualEmail: string | null = sessionStorage.getItem('email');
    setEmail(ActualEmail);
  }, []);

  useEffect(() => {
    tokenVerification();
    sessionStorage.getItem('token')
      ? GetUserApi().then((res) => {
          setIdUserActual(res.user.id);
        })
      : router.push('/login');
  }, []);
  useEffect(() => {
    tokenVerification();
    if (idChannel) {
      getMessagesByChannel('' + idChannel).then((res) =>
        setMessages(res.messages)
      );
      GetChannelsByIdApi(idChannel).then((res) =>
        setChannelName(res.channel.name)
      );
    } else if (idUser) {
      getMessagesByUser(idUser).then((res) => setMessages(res.messages));
      GetUsersApi().then((res) => {
        let userList: any[] = res.users;
        userList = userList.filter((item: any) => item.id == idUser);
        setUserName(userList[0]?.name || '......');
      });
    }
  }, [idChannel, idUser, update]);
  useEffect(() => {
    tokenVerification();
    let newMessagesItem: MessegeItem[] = [];
    messages &&
      messages.forEach((item) => newMessagesItem.push(convertMessage(item)));
    setMessagesItem(newMessagesItem);
  }, [messages]);

  const convertMessage = (message: MessageType) => {
    return {
      id: message.id,
      userId: message.sender.id,
      message: message.content,
      name: message.sender.name,
    };
  };

  const sendMessageActual = (messages: string) => {
    tokenVerification();
    const messageToSend: SedMessageType = {
      channelId: null,
      content: messages,
      recipientId: null,
    };
    if (idChannel) {
      sendMessage({ ...messageToSend, channelId: idChannel }).then(() =>
        getMessagesByChannel('' + idChannel).then((res) =>
          setMessages(res.messages)
        )
      );
    } else if (idUser) {
      sendMessage({ ...messageToSend, recipientId: idUser }).then(() =>
        getMessagesByUser(idUser).then((res) => setMessages(res.messages))
      );
    }
  };

  return (
    <SideBarLayout>
      <div className="bg-white absolute inset-0 w-full h-full">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full h-full flex flex-col justify-between">
          <div>
            <div className="mx-auto max-w-2xl lg:text-center">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {idChannel
                  ? 'You are in Channel : ' + ChannelName
                  : idUser
                  ? 'Whith the friend : ' + UserName
                  : "Welcome to HEI-Chat{' '}"}
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                This site allows you to chat with other HEI students
              </p>
            </div>
            {MessageList(messagesItem, idUserActual)}
          </div>
          {Send((item) => {
            sendMessageActual(item);
          })}
        </div>
      </div>
    </SideBarLayout>
  );
}
