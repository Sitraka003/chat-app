import { CreateChannelApi, CreateUsersApi, logingApi } from '@/api';
import { CreateChannelForm } from '@/component/create-channel-form';
import { LoginForm } from '@/features/authentication';
import { SingUpForm } from '@/features/authentication/component/sing-up-form';
import { CreateChannelType, CreateUser, LogingUser } from '@/type';
import { create } from 'domain';
import { NextRouter, useRouter } from 'next/router';
import { useEffect } from 'react';

export default function CreateChannel() {
  const router: NextRouter = useRouter();
  const handleSubmit = (data: any) => {
    let dataTrancformed: CreateChannelType = {
      name: data.name,
      members: data.members,
      type: data.type,
    };
    CreateChannelApi(dataTrancformed)
      .then(() => {
        router.push('/');
      })
      .catch(() => {
        router.push('/');
      });
  };
  return (
    <div className="bg-white py-24 sm:py-32">
      {CreateChannelForm(handleSubmit)}
    </div>
  );
}
