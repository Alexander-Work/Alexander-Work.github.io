import { NavLink as RouterNavLink } from 'react-router-dom';
import type { NavLinkProps } from 'react-router-dom';
import clsx from 'clsx'; // Optional, for clean conditional classes

export default function NavLink({ to, children, ...props }: NavLinkProps) {
  return (
    <RouterNavLink
      to={to}
      {...props}
      className={({ isActive }) =>
        clsx(
          'px-4 py-2 rounded-lg font-medium transition-colors',
          isActive
            ? 'bg-white text-blue-600 shadow'
            : 'text-white hover:bg-blue-600/30'
        )
      }
    >
      {children}
    </RouterNavLink>
  );
}
