// src/components/common/NavLink.tsx
import { NavLinkProps } from '../../types/index';

const NavLink = ({ href, children }: NavLinkProps) => (
  <a 
    href={href}
    className="relative text-sm text-white hover:text-red-400 transition-colors duration-200 px-4 py-2"
  >
    {children}
  </a>
);

export default NavLink;