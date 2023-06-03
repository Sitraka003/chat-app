import { CreateUsersApi, logingApi } from '@/api';
import { LoginForm } from '@/features/authentication';
import { SingUpForm } from '@/features/authentication/component/sing-up-form';
import { Profile } from '@/features/user';
import { CreateUser, LogingUser } from '@/type';
import { create } from 'domain';
import { NextRouter, useRouter } from 'next/router';
import { useEffect } from 'react';

export default function ProfilePage() {
  const router: NextRouter = useRouter();
  useEffect(() => {
    if (!sessionStorage.getItem('token')) {
      router.push('/login');
    }
  }, []);

  const handleSubmit = (data: any) => {
    let dataTrancformed: CreateUser = {
      email: data.email,
      password: data.password,
      bio: data.bio,
      name: data.name,
    };
    CreateUsersApi(dataTrancformed).then((res) => {
      res.user.email && sessionStorage.setItem('email', res.user.email);
      res.user.token && sessionStorage.setItem('token', res.user.token);
      res.user.name && sessionStorage.setItem('name', res.user.name);
      res.user.email && res.user.token && res.user.name && router.push('/');
    });
  };
  return <Profile />;
}
