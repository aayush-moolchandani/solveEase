"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/workers', label: 'Workers' },
    { href: '/about', label: 'About' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/" className="group flex items-center space-x-2">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-pulse"></div>
          </div>
          <span className={`text-2xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent ${
            scrolled ? 'text-gray-800' : 'text-white'
          }`}>
            HirePro
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link 
                href={item.href}
                className={`relative px-4 py-2 font-semibold transition-all duration-300 group ${
                  pathname === item.href
                    ? scrolled
                      ? 'text-purple-600'
                      : 'text-white'
                    : scrolled
                      ? 'text-gray-700 hover:text-purple-600'
                      : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transform origin-left transition-transform duration-300 ${
                  pathname === item.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link 
            href="/workers"
            className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden relative w-8 h-8 flex flex-col justify-center items-center space-y-1 group ${
            scrolled ? 'text-gray-800' : 'text-white'
          }`}
        >
          <span className={`w-6 h-0.5 bg-current transform transition-all duration-300 ${
            menuOpen ? 'rotate-45 translate-y-1.5' : ''
          }`}></span>
          <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${
            menuOpen ? 'opacity-0' : ''
          }`}></span>
          <span className={`w-6 h-0.5 bg-current transform transition-all duration-300 ${
            menuOpen ? '-rotate-45 -translate-y-1.5' : ''
          }`}></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-white/20 shadow-2xl transform transition-all duration-500 ${
        menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <ul className="flex flex-col p-6 space-y-4">
          {navItems.map((item, index) => (
            <li key={item.href} className={`transform transition-all duration-300 delay-${index * 100}`}>
              <Link 
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  pathname === item.href
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="pt-4">
            <Link 
              href="/workers"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
            >
              Get Started
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
