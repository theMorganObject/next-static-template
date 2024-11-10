'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const navItems = [
    { href: '/', text: 'Home' },
    { href: '/about', text: 'About' },
    { href: '/contact', text: 'Contact' },
  ];

  // Close modal on 'Escape' key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenuWithTransition();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleMenu = () => {
    if (isOpen) {
      closeMenuWithTransition();
    } else {
      setIsOpen(true);
    }
  };

  const closeMenuWithTransition = () => {
    setIsClosing(true);
    const timeoutId = setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 200);

    return () => clearTimeout(timeoutId);
  };

  return (
    <nav className='sticky top-0 z-50 w-full bg-gray-800'>
      <div className='flex justify-between grow p-4 sm:grid sm:grid-cols-3 sm:items-center sm:x-auto'>
        {/* Logo */}
        <h1 className='text-white text-left'>MySite</h1>

        {/* Nav Links (Hidden on mobile) */}
        <ul className='hidden justify-center space-x-16 text-white sm:flex lg:space-x-20'>
          {navItems.map((item) => (
            <li key={item.text}>
              <Link href={item.href}>{item.text}</Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon (Visible on mobile) */}
        <div className='flex justify-end'>
          <button className='text-white sm:hidden' onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Modal Overlay */}
      {isOpen && (
        <div
          className={`fixed inset-0 z-40 bg-black bg-opacity-85 flex flex-col items-center justify-center sm:hidden transition-opacity duration-250 ${
            isClosing ? 'opacity-0' : 'opacity-100'
          }`}
          onClick={closeMenuWithTransition} // Closes menu on overlay click
        >
          {/* Close Icon Inside Overlay */}
          <button
            className='absolute top-4 right-4 text-white z-50'
            onClick={closeMenuWithTransition}
          >
            <FaTimes size={24} />
          </button>

          <ul
            className='space-y-6 text-white text-2xl'
            onClick={(e) => e.stopPropagation()} // Prevents overlay click from closing when clicking menu items
          >
            {navItems.map((item) => (
              <li key={item.text} onClick={closeMenuWithTransition}>
                <Link href={item.href}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
