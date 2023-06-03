import { logingApi } from '@/api';
import { LoginForm } from '@/features/authentication';
import { LogingUser } from '@/type';
import { NextRouter, useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Login() {
  const router: NextRouter = useRouter();
  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      router.push('/');
    }
  }, []);

  const handleSubmit = (data: any) => {
    let dataTrancformed: LogingUser = {
      email: data.email,
      password: data.password,
    };
    logingApi(dataTrancformed).then((res) => {
      res.user?.email && sessionStorage.setItem('email', res.user.email);
      res.user?.token && sessionStorage.setItem('token', res.user.token);
      res.user?.name && sessionStorage.setItem('name', res.user.name);
      res.user?.email && res.user.token && res.user.name && router.push('/');
    });
  };
  return (
    <div className="bg-white py-24 sm:py-32">{LoginForm(handleSubmit)}</div>
  );
}
