import SideBar from '@/component/sideBar';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function SideBarLayout({ children }: LayoutProps) {
  return (
    <div className="flex flex-row h-full ba">
      {SideBar()}
      <aside className="top-0 left-0 z-40 w-full h-5/5 transition-transform -translate-x-full sm:translate-x-0 bg-slate-100 relative">
        {children}
      </aside>
    </div>
  );
}
