"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

// Logo Component
const Logo = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  const logo_black = "/assets/logo/logo_black.png";
  const logo_white = "/assets/logo/logo_white_01.png";

  return (
    <Link href="/" className="flex items-center space-x-2 group relative">
      <Image
        src={logo_black}
        height={50}
        width={50}
        alt="GAMLIC Logo"
        className={`object-contain transition-opacity duration-500 ${
          isMenuOpen
            ? "opacity-0 dark:opacity-100"
            : "opacity-100 dark:opacity-0"
        }`}
        priority
      />
      <Image
        src={logo_white}
        height={50}
        width={50}
        alt="GAMLIC Logo"
        className={`object-contain absolute transition-opacity duration-500 ${
          isMenuOpen
            ? "opacity-100 dark:opacity-0"
            : "opacity-0 dark:opacity-100"
        }`}
        priority
      />
    </Link>
  );
};

// Theme Toggle Component
const ThemeToggle = ({
  onToggle,
  isMenuOpen = false,
}: {
  onToggle: () => void;
  isMenuOpen?: boolean;
}) => {
  return (
    <button
      onClick={onToggle}
      className="p-2 rounded-lg transition-colors md:hover:bg-gray-200 md:dark:hover:bg-gray-700 relative"
      aria-label="Toggle theme"
    >
      {/* Moon icon - shown in dark mode */}
      <svg
        className={`w-7.5 h-7.5 absolute transition-opacity duration-500 opacity-0 dark:opacity-100 ${
          isMenuOpen ? "text-light dark:text-dark" : "text-light"
        }`}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
      {/* Sun icon - shown in light mode */}
      <svg
        className={`w-7.5 h-7.5 transition-opacity duration-500 opacity-100 dark:opacity-0 ${
          isMenuOpen ? "text-light dark:text-dark" : "text-dark"
        }`}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    </button>
  );
};

// Mobile Menu Button Component
const MobileMenuButton = ({
  isOpen,
  onToggle,
}: {
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <button
      onClick={onToggle}
      className={`md:hidden p-2 rounded-lg transition-colors border-2 ${
        isOpen
          ? "border-light dark:border-dark"
          : "border-dark dark:border-light"
      }`}
      aria-label="Toggle menu"
    >
      <svg
        className={`w-7.5 h-7.5 ${
          isOpen ? "text-light dark:text-dark" : "text-dark dark:text-light"
        }`}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        {isOpen ? (
          <path d="M6 18L18 6M6 6l12 12" />
        ) : (
          <path d="M4 6h16M4 12h16M4 18h16" />
        )}
      </svg>
    </button>
  );
};

// Mobile Navigation Menu Component
const MobileNavigationMenu = ({
  isOpen,
  onToggle,
  navLinks,
  isActive,
}: {
  isOpen: boolean;
  onToggle: () => void;
  navLinks: Array<{ href: string; label: string }>;
  isActive: (href: string) => boolean;
}) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden absolute top-full left-0 right-0 bg-dark dark:bg-light backdrop-b-blur-md py-5 animate-[slideDown_0.3s_ease-out] transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col space-y-4 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => onToggle()}
              className={`py-1 rounded-lg font-medium uppercase transition-all ${
                isActive(link.href)
                  ? "text-yellow-400 dark:text-yellow-500 text-3xl"
                  : "text-zinc-300 dark:text-zinc-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const NavHeader = () => {
  const [notAtTop, setNotAtTop] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Scroll handler function
  const handleScroll = () => {
    setNotAtTop(window.scrollY > 20);
  };

  // Initialize theme on mount
  const initializeTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark);

    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
      console.log("Theme on site entry: dark");
    } else {
      document.documentElement.classList.remove("dark");
      console.log("Theme on site entry: light");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    initializeTheme();
  }, []);

  const toggleTheme = () => {
    const isCurrentlyDark = document.documentElement.classList.contains("dark");

    if (isCurrentlyDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      console.log("Theme toggled to: light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      console.log("Theme toggled to: dark");
    }
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/games", label: "Games" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(href);
  };

  return (
    <nav
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`sticky md:fixed top-0 left-0 right-0 transition-colors duration-500  ${
        isMobileMenuOpen
          ? "z-60 bg-dark dark:bg-light"
          : "z-50 bg-light dark:bg-dark"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-4 pb-4 md:pt-0 md:pb-0 relative">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Logo isMenuOpen={isMobileMenuOpen} />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium ${
                  isActive(link.href)
                    ? "border-b-2 border-dark dark:border-light text-dark dark:text-light"
                    : " hover:text-gray-800 dark:hover:text-gray-200 text-gray-400 dark:text-gray-300"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle onToggle={toggleTheme} />
          </div>

          {/* Mobile: Toggler */}
          <div className="md:hidden">
            <ThemeToggle onToggle={toggleTheme} isMenuOpen={isMobileMenuOpen} />
          </div>

          {/* Mobile: Menu Button */}
          <div className="md:hidden">
            <MobileMenuButton
              isOpen={isMobileMenuOpen}
              onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </div>

        <MobileNavigationMenu
          isOpen={isMobileMenuOpen}
          onToggle={() => setIsMobileMenuOpen(false)}
          navLinks={navLinks}
          isActive={isActive}
        />
      </div>
    </nav>
  );
};

export default NavHeader;
