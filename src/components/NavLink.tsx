import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isScrolled: boolean;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, children, isScrolled }) => {
  return (
    <a 
      href={href} 
      className={`font-medium transition-colors ${
        isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-100'
      }`}
    >
      {children}
    </a>
  );
};