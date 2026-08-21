import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Work', href: '#service' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-5 md:px-12 md:py-6 transition-all duration-700 ease-in-out ${
          show
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0'
        } ${
          isMenuOpen
            ? 'bg-[#FFF6F1]/95 backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <a
          href="#home"
          className="text-[#4A252B] font-black text-xl md:text-2xl tracking-widest uppercase cursor-pointer relative z-50"
        >
          Arya
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[#70464E] text-sm hover:text-[#D96875] transition-colors uppercase tracking-wider font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div
          className="md:hidden text-[#4A252B] cursor-pointer hover:text-[#D96875] transition-colors relative z-50 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          role="button"
          tabIndex={0}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-[#FFF6F1] flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden ${
          isMenuOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-[#4A252B] text-3xl font-black uppercase tracking-widest hover:text-[#D96875] transition-all duration-500 ${
                isMenuOpen
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;