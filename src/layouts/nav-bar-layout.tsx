import NavBar from '@/component/navBar';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function NavBarLayout({ children }: LayoutProps) {
  return (
    <div>
      {NavBar()}
      {children}
    </div>
  );
}
