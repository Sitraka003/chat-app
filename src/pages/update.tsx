import { UpdateUserApi } from '@/api';
import { UpDateForm } from '@/features/user';
import { ModifyUser } from '@/type';
import { NextRouter, useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Update() {
  const router: NextRouter = useRouter();
  useEffect(() => {
    if (!sessionStorage.getItem('token')) {
      router.push('/login');
    }
  }, []);

  const handleSubmit = (data: any) => {
    let dataTrancformed: ModifyUser = {
      password: data.password,
      bio: data.bio,
      name: data.name,
      oldPassword: data.oldPassword,
    };
    UpdateUserApi(dataTrancformed).then((res) => {
      res.user.email && sessionStorage.setItem('email', res.user.email);
      res.user.token && sessionStorage.setItem('token', res.user.token);
      res.user.name && sessionStorage.setItem('name', res.user.name);
      res.user.email && res.user.token && res.user.name && router.push('/');
    });
  };
  return (
    <div className="bg-white py-24 sm:py-32">{UpDateForm(handleSubmit)}</div>
  );
}
