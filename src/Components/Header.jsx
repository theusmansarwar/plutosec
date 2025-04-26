'use client';

import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { AiOutlineGlobal } from 'react-icons/ai';
import { FiMenu, FiX } from 'react-icons/fi';
import './Header.css';

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [activeItem, setActiveItem] = useState('');
  const [language, setLanguage] = useState('EN');
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Why Plutosec', path: '/why-us' },
    { label: 'Career', path: '/careers' },
    { label: 'Contact Us', path: '/contact' },
  ];

  useEffect(() => {
    const foundItem = menuItems.find((item) => item.path === pathname);
    if (foundItem) setActiveItem(foundItem.label);
  }, [pathname]);

  const handleNavClick = (item) => {
    setActiveItem(item.label);
    setMobileOpen(false); // Close mobile menu on click
    router.push(item.path);
  };

  return (
    <div className="Header">
      <img src="/plutologo.svg" alt="Logo" />

      {/* Menu icon (hamburger) */}
      <div className="menu-icon" onClick={() => setMobileOpen(!mobileOpen)}>
        {mobileOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* Nav menu */}
      <ul className={`nav ${mobileOpen ? 'open' : ''}`}>
        {menuItems.map((item) => (
          <li
            key={item.label}
            className={activeItem === item.label ? 'active' : ''}
            onClick={() => handleNavClick(item)}
          >
            {item.label}
          </li>
        ))}
      </ul>

      <div className="language-select">
        <AiOutlineGlobal className="icons" />
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="EN">English</option>
          <option value="ES">ES</option>
          <option value="FR">FR</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
