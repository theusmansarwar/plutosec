'use client';
import React, { useEffect, useState, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { AiOutlineGlobal } from 'react-icons/ai';
import { FiMenu, FiX } from 'react-icons/fi';
import './Header.css';

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  const controlHeader = () => {
    if (typeof window !== 'undefined') {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setShowHeader(false); // Scrolling down
      } else {
        setShowHeader(true); 
      }

      lastScrollY.current = currentScrollY;
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlHeader);
      return () => {
        window.removeEventListener('scroll', controlHeader);
      };
    }
  }, []);

  const [activeItem, setActiveItem] = useState('');
  const [language, setLanguage] = useState('EN');
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Industries', path: '/industries' },
    { label: 'Why Us', path: '/why-us' },
    { label: 'Careers', path: '/careers' },
    { label: 'Contact Us', path: '/contact' },
  ];

  useEffect(() => {
    const foundItem = menuItems.find((item) => item.path === pathname);
    if (foundItem)
      { setActiveItem(foundItem.label);}
    else{
       setActiveItem("");
    }
  }, [pathname]);

  const handleNavClick = (item) => {
    setActiveItem(item.label);
    setMobileOpen(false);
    router.push(item.path);
  };

  const handleNavClick2 = () => {
    router.push('/');
  };

  return (
    <div className={`Header ${showHeader ? 'show' : 'hide'}`}>
      <img src="/logo4.png" alt="Logo" onClick={handleNavClick2} />
      <div className="menu-icon" onClick={() => setMobileOpen(!mobileOpen)}>
        {mobileOpen ? <FiX /> : <FiMenu />}
      </div>
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
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="EN">English</option>
          {/* <option value="ES">ES</option>
          <option value="FR">FR</option> */}
        </select>
      </div>
    </div>
  );
};

export default Header;
