import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NavLink } from './NavLink';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-blue-600">
              BrandName
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="#home" isScrolled={isScrolled}>Home</NavLink>
            <NavLink href="#features" isScrolled={isScrolled}>Features</NavLink>
            <NavLink href="#about" isScrolled={isScrolled}>About</NavLink>
            <NavLink href="#testimonials" isScrolled={isScrolled}>Testimonials</NavLink>
            
            <div className="relative group">
              <button 
                className={`flex items-center font-medium transition-colors ${
                  isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-100'
                }`}
              >
                Resources <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right">
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Documentation</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Blog</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Support</a>
                </div>
              </div>
            </div>
            
            <NavLink href="#contact" isScrolled={isScrolled}>Contact</NavLink>
            
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Get Started
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-end">
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-md focus:outline-none"
              aria-label="Close menu"
            >
              <X className="h-6 w-6 text-gray-800" />
            </button>
          </div>
          <nav className="flex flex-col space-y-4 mt-8">
            <a href="#home" onClick={toggleMenu} className="text-xl font-medium text-gray-800 hover:text-blue-600 transition-colors py-2">Home</a>
            <a href="#features" onClick={toggleMenu} className="text-xl font-medium text-gray-800 hover:text-blue-600 transition-colors py-2">Features</a>
            <a href="#about" onClick={toggleMenu} className="text-xl font-medium text-gray-800 hover:text-blue-600 transition-colors py-2">About</a>
            <a href="#testimonials" onClick={toggleMenu} className="text-xl font-medium text-gray-800 hover:text-blue-600 transition-colors py-2">Testimonials</a>
            <div className="py-2">
              <p className="text-xl font-medium text-gray-800 mb-2">Resources</p>
              <div className="pl-4 space-y-2">
                <a href="#" onClick={toggleMenu} className="block text-lg text-gray-700 hover:text-blue-600 transition-colors">Documentation</a>
                <a href="#" onClick={toggleMenu} className="block text-lg text-gray-700 hover:text-blue-600 transition-colors">Blog</a>
                <a href="#" onClick={toggleMenu} className="block text-lg text-gray-700 hover:text-blue-600 transition-colors">Support</a>
              </div>
            </div>
            <a href="#contact" onClick={toggleMenu} className="text-xl font-medium text-gray-800 hover:text-blue-600 transition-colors py-2">Contact</a>
            
            <div className="pt-4">
              <a 
                href="#" 
                onClick={toggleMenu}
                className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Get Started
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};