import { useState, useEffect, useRef } from 'react';

import { Link } from 'react-router-dom'

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  const megaMenuRef = useRef(null);
  const megaButtonRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const toggleOpenRef = useRef(null);
  const lastFocusedElement = useRef(null);

  // --- Mobile Menu Logic ---
  const openMobileMenu = () => {
    lastFocusedElement.current = document.activeElement;
    setIsMobileOpen(true);
    // Timeout allows React to render before focusing
    setTimeout(() => mobileMenuRef.current?.focus(), 0);
  };

  const closeMobileMenu = () => {
    setIsMobileOpen(false);
    lastFocusedElement.current?.focus();
  };

  // --- Global Event Handlers (Click Outside & Escape) ---
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (isMobileOpen) {
          closeMobileMenu();
        }
      }
    };

    const handleClickOutside = (e) => {
      // Close Mega Menu if clicking outside
      if (
        isMegaMenuOpen &&
        megaMenuRef.current &&
        !megaMenuRef.current.contains(e.target) &&
        !megaButtonRef.current.contains(e.target)
      ) {
        setIsMegaMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMegaMenuOpen, isMobileOpen]);


  return (
    <nav
      className="flex py-2 px-4 md:px-8 bg-blue-950 text-white border-b border-slate-300 min-h-[68px] relative z-20"
      aria-label="Main navigation"
    >
      <div className="max-w-4xl mx-auto flex flex-wrap justify-between items-center gap-4 w-full">
        <Link
          to="/"
          className="min-w-9 inline-block focus:outline-none rounded"
        >
          <h1 className="w-auto font-bold text-3xl">User List</h1>
        </Link>

        <div
          id="collapseMenu"
          ref={mobileMenuRef}
          tabIndex="-1"
          className={`${isMobileOpen ? 'block' : 'hidden'} z-50 outline-none lg:block max-lg:bg-white max-lg:border-l max-lg:border-slate-300 max-lg:w-1/2 max-lg:fixed max-lg:top-0 max-lg:right-0 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto max-sm:w-full`}
        >
          {/* Mobile Menu Header */}
          <div className="py-2 px-4 flex justify-between items-center border-b border-slate-300 sticky top-0 bg-white lg:hidden max-lg:min-h-[68px]">
            <a href="#" className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
              <h1 className="w-auto font-bold">User List</h1>
            </a>
            <button
              type="button"
              id="toggleClose"
              aria-controls="collapseMenu"
              onClick={closeMobileMenu}
              className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
            >
              <span className="sr-only">Close main menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="size-4 fill-slate-900" aria-hidden="true" viewBox="0 0 329.269 329">
                <path d="M194.8 164.77 323.013 36.555c8.343-8.34 8.343-21.825 0-30.164-8.34-8.34-21.825-8.34-30.164 0L164.633 134.605 36.422 6.391c-8.344-8.34-21.824-8.34-30.164 0-8.344 8.34-8.344 21.824 0 30.164l128.21 128.215L6.259 292.984c-8.344 8.34-8.344 21.825 0 30.164a21.27 21.27 0 0 0 15.082 6.25c5.46 0 10.922-2.09 15.082-6.25l128.21-128.214 128.216 128.214a21.27 21.27 0 0 0 15.082 6.25c5.46 0 10.922-2.09 15.082-6.25 8.343-8.34 8.343-21.824 0-30.164zm0 0" />
              </svg>
            </button>
          </div>

          <ul className="flex flex-col gap-8 font-semibold text-sm lg:flex-row max-lg:p-6 lg:ml-12">
            <li>
              <Link to="/" className="text-shadow-white rounded" aria-current="page">
                Home
              </Link>
            </li>
            <li>
              <Link to="/user" className="text-shadow-white rounded" aria-current="page">
                Users
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-shadow-white rounded" aria-current="page">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-shadow-white rounded" aria-current="page">
                Contact
              </Link>
            </li>
          </ul>

        </div>
      </div>
      <div className="lg:hidden flex items-center gap-4 ml-auto">
        <button
          type="button"
          id="toggleOpen"
          ref={toggleOpenRef}
          aria-controls="collapseMenu"
          aria-expanded={isMobileOpen}
          aria-haspopup="true"
          onClick={openMobileMenu}
          className="cursor-pointer lg:hidden focus:outline-none  rounded"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="size-7 fill-slate-900" aria-hidden="true" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};





