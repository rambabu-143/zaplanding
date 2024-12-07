'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll } from 'framer-motion';
import { Button } from './ui/button';
import Image from 'next/image';

export function Navbar() {
  const { scrollY } = useScroll();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setHasScrolled(latest > 0);
    });
  }, [scrollY]);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false); // Close the mobile menu
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        const navbarHeight = 80; // Adjust this value based on your navbar height
        const sectionTop = section.offsetTop - navbarHeight;
        window.scrollTo({
          top: sectionTop,
          behavior: 'smooth'
        });
      }
    }, 300); // Add a small delay to ensure the mobile menu has closed
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { id: 'features', label: 'Features' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'faqs', label: 'FAQs' },
    { id: 'footer', label: 'Contact' },
  ];

  return (
    <motion.header
      className={`fixed top-0  left-0 right-0 z-50 transition-colors duration-200 ${hasScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <nav className="container mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-black">
          <Image src='/ZapmyjobLOgo.svg' alt='Zapmyjob Logo' width={100} height={100} />
        </Link>

        <div className="hidden md:flex items-center space-x-10">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className="text-gray-700 hover:text-black transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <Button
            variant="default"
            className="bg-black text-white hover:bg-gray-800 hover:shadow-md transition-all duration-300 py-2 px-4 sm:px-6"
          >
            Sign Up
          </Button>

          <button
            className="md:hidden text-gray-700 hover:text-black transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <HamburgerIcon isOpen={isMenuOpen} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <motion.div
        className="md:hidden"
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: 'auto' },
          closed: { opacity: 0, height: 0 }
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-white px-4 py-2 shadow-lg">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className="block w-full text-left py-2 text-gray-700 hover:text-black transition-colors"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.header>
  );
}

function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <motion.path
        variants={{
          closed: { d: "M4 6h16M4 12h16M4 18h16" },
          open: { d: "M6 18L18 6M6 6l12 12" }
        }}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      />
    </svg>
  );
}

