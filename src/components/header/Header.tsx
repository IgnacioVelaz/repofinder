import { FC, PropsWithChildren } from 'react';

const Header: FC<PropsWithChildren> = ({ children }) => (
  <header className="relative flex h-16 items-center gap-4 bg-clr-bg px-4">
    {children}
  </header>
);
export default Header;
