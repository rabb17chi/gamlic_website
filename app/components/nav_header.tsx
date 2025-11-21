"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

const SECTION_IDS = ["Intro", "Products", "About", "Contact"];

// Logo Component
const Logo = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  const logo_black = "/assets/logo/logo_black.png";
  const logo_white = "/assets/logo/logo_white_01.png";

  return (
    <Link
      href="#Intro"
      className="flex items-center group relative"
      onClick={(e) => {
        e.preventDefault();
        const element = document.querySelector("#Intro");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }}
    >
      <Image
        src={logo_black}
        height={50}
        width={50}
        alt="GAMLIC Logo"
        className={`py-2 object-contain transition-opacity duration-500 ${
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

// Language Switcher Component
const LanguageSwitcher = ({ isMenuOpen = false }: { isMenuOpen?: boolean }) => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = () => {
    // Get the current pathname without locale prefix
    let currentPath = pathname;

    // Remove /en prefix if it exists
    if (currentPath.startsWith("/en")) {
      currentPath = currentPath.slice(3) || "/";
    }

    // Ensure path starts with /
    if (!currentPath.startsWith("/")) {
      currentPath = "/" + currentPath;
    }

    let targetPath: string;
    if (locale === "en") {
      targetPath = currentPath;
    } else {
      targetPath = `/en${currentPath}`;
    }

    window.location.href = targetPath;
  };

  return (
    <div className="flex items-center space-x-1">
      <button
        onClick={switchLanguage}
        className={`h-12.5 px-4 py-4 text-sm font-medium rounded-lg transition-colors hover:cursor-pointer md:hover:bg-gray-200 md:dark:hover:bg-gray-700 ${
          isMenuOpen ? "text-light dark:text-dark" : "text-dark dark:text-light"
        }`}
        aria-label={locale === "en" ? "Switch to Chinese" : "Switch to English"}
      >
        {locale === "en" ? "Eng" : "中文"}
      </button>
    </div>
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
      className="p-2.5 rounded-lg transition-colors duration-300 md:hover:bg-gray-200 md:dark:hover:bg-gray-700 relative"
      aria-label="Toggle theme"
    >
      {/* Moon icon - shown in dark mode */}
      <svg
        className={`w-7.5 h-7.5 absolute transition-all duration-500 opacity-0 dark:opacity-100 ${
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
      className={`md:hidden p-2 rounded-lg transition-colors duration-500 border-2 ${
        isOpen
          ? "border-light dark:border-dark"
          : "border-dark dark:border-light"
      }`}
      aria-label="Toggle menu"
    >
      <svg
        className={`w-7.5 h-7.5 transition-colors duration-500 ${
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
  onNavigate,
}: {
  isOpen: boolean;
  onToggle: () => void;
  navLinks: Array<{ href: string; label: string }>;
  isActive: (href: string) => boolean;
  onNavigate: (href: string) => void;
}) => {
  return (
    <div
      className={`md:hidden absolute top-full left-0 right-0 bg-dark dark:bg-light py-5 transition-all duration-500 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col space-y-4 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector(link.href);
                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
                onNavigate(link.href);
                onToggle();
              }}
              className={`py-1 rounded-lg font-medium uppercase transition-all ${
                isActive(link.href)
                  ? "text-yellow-400 dark:text-yellow-500 text-3xl"
                  : "text-light dark:text-dark"
              }`}
            >
              {link.label}
            </Link>
          ))}
          {/* Language Switcher in Mobile Menu */}
          <div className="flex justify-center pt-2">
            <LanguageSwitcher isMenuOpen={isOpen} />
          </div>
        </div>
      </div>
    </div>
  );
};

const NavHeader = () => {
  const t = useTranslations("nav");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState("#Intro");
  const isNavigatingRef = useRef(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Handle hash changes for active state
  useEffect(() => {
    const initialHash = window.location.hash || "#Intro";
    setCurrentHash(initialHash);

    // Listen for hash changes
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || "#Intro");
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!isNavigatingRef.current && entry.isIntersecting) {
            const newHash = `#${entry.target.id}`;
            setCurrentHash((prev) => (prev !== newHash ? newHash : prev));
          }
        });
      },
      {
        root: null,
        threshold: 0.5,
      }
    );

    SECTION_IDS.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const handleNavigate = (href: string) => {
    setCurrentHash(href);
    isNavigatingRef.current = true;
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    scrollTimeoutRef.current = setTimeout(() => {
      isNavigatingRef.current = false;
    }, 800);
  };

  const toggleTheme = () => {
    const isCurrentlyDark = document.documentElement.classList.contains("dark");

    if (isCurrentlyDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      // console.log("Theme toggled to: light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      // console.log("Theme toggled to: dark");
    }
  };

  const navLinks = [
    { href: "#Intro", label: t("home") },
    { href: "#Products", label: t("games") },
    { href: "#About", label: t("about") },
    // { href: "#Contact", label: t("contact") },
  ];

  const isActive = (href: string) => {
    // Remove # from href for comparison
    const hrefId = href.replace("#", "");
    const currentHashId = currentHash.replace("#", "");

    // For Home/Intro, check if hash is empty or matches Intro
    if (href === "#Intro") {
      return currentHash === "" || currentHashId === "Intro";
    }

    return currentHashId === hrefId;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 transition-colors duration-500  ${
        isMobileMenuOpen
          ? "z-60 bg-dark dark:bg-light backdrop-blur-none"
          : "z-50 bg-transparent dark:bg-transparent backdrop-blur-lg"
      }`}
    >
      <div className=" w-full mx-auto px-4 lg:px-8 pt-2 pb-2 md:pt-0 md:pb-0 relative">
        <div
          className={`max-w-7xl mx-auto flex items-center justify-between h-16 md:h-20`}
        >
          {/* Mobile: Toggler */}
          <div className="md:hidden">
            <ThemeToggle onToggle={toggleTheme} isMenuOpen={isMobileMenuOpen} />
          </div>

          {/* Logo */}
          <Logo isMenuOpen={isMobileMenuOpen} />

          {/* Mobile: Menu Button */}
          <div className="md:hidden">
            <MobileMenuButton
              isOpen={isMobileMenuOpen}
              onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(link.href);
                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                  handleNavigate(link.href);
                }}
                className={`px-4 py-2 rounded-xl transition-all duration-300 text-dark dark:text-light  ${
                  isActive(link.href)
                    ? "font-bold text-lg"
                    : "text-sm font-medium hover:text-gray-700 hover:bg-gray-200 dark:hover:text-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
            |
            <div className="h-12.5 ml-2 flex gap-2" id="Utils-area">
              <ThemeToggle onToggle={toggleTheme} />
              <LanguageSwitcher />
            </div>
          </div>
        </div>

        <MobileNavigationMenu
          isOpen={isMobileMenuOpen}
          onToggle={() => setIsMobileMenuOpen(false)}
          navLinks={navLinks}
          isActive={isActive}
          onNavigate={handleNavigate}
        />
      </div>
    </nav>
  );
};

export default NavHeader;
