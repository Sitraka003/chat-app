import { NextRouter, useRouter } from 'next/router';
import React, { Children, ReactNode, useEffect } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Autorized({ children }: LayoutProps) {
  const router: NextRouter = useRouter();
  const tokenVerification = () => {
    const ActualEmail: string | null = sessionStorage.getItem('email');
    if (!ActualEmail) {
      router.push('/login');
    }
  };
  return <>{Children}</>;
}
