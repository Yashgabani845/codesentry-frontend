'use client';
import { useState, useEffect } from "react";
// Using lucide-react for icons for consistency and ease of use
import { User, LogIn, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); // New state for scroll effect

  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position is more than a certain threshold (e.g., 50px)
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const mainNavLinks = [
    { href: "#platform", label: "Platform" },
    { href: "#solutions", label: "Solutions" },
    { href: "#resources", label: "Resources" },
    { href: "#company", label: "Company" },
    { href: "#pricing", label: "Pricing" },
  ];

  const rightNavLinks = [
    { href: "#for-learners", label: "For Learners", icon: User },
    { href: "#login", label: "Log In", icon: LogIn },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`} // Conditional styling for blur and background
      aria-label="Main"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4"> {/* Increased py for height */}
          {/* Left Side: Logo */}
          <div className="flex-shrink-0 select-none">
            <h1 className="text-2xl font-bold tracking-tight text-foreground">
              <span>Code</span>
              <span className="text-blue-600">Sentry</span>
            </h1>
          </div>

          {/* Center: Main Navigation Links */}
          <div className="hidden lg:flex items-center gap-7">
            {mainNavLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative group font-medium text-slate-700 transition-colors duration-200 hover:text-blue-600" // Text color adjustments
              >
                <span className="inline-block">{item.label}</span>
                <span
                  aria-hidden="true"
                  className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-600 transition-all duration-200 group-hover:w-full"
                />
              </a>
            ))}
          </div>

          {/* Right Side: Action Links and Button */}
          <div className="hidden lg:flex items-center gap-7">
            {rightNavLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative group font-medium text-slate-700 transition-colors duration-200 hover:text-blue-600 flex items-center gap-1" // Text color adjustments
              >
                {item.icon && <item.icon className="w-4 h-4" />}
                <span className="inline-block">{item.label}</span>
                <span
                  aria-hidden="true"
                  className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-600 transition-all duration-200 group-hover:w-full"
                />
              </a>
            ))}
            <a
              href="#book-demo"
              aria-label="Book a demo"
              className="inline-flex items-center rounded-md bg-blue-600 px-5 py-2 font-semibold text-white transition-colors duration-200 hover:bg-blue-700 shadow-md hover:shadow-lg" // Added shadow
            >
              Book a Demo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen((v) => !v)}
              className="p-2 rounded-md text-slate-700 hover:text-blue-600 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" /> // Using Lucide X icon
              ) : (
                <Menu className="w-6 h-6" /> // Using Lucide Menu icon
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Content */}
        {isMenuOpen && (
          <div id="mobile-menu" className="lg:hidden py-3 border-t border-slate-200"> {/* Adjusted border color */}
            <div className="flex flex-col gap-1">
              {[
                ...mainNavLinks,
                ...rightNavLinks.map(item => ({ ...item, icon: undefined })) // Remove icons for consistency in mobile links
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-2 rounded-md font-medium text-slate-700 transition-colors duration-200 hover:bg-blue-50 flex items-center gap-2" // Text and hover adjustments
                >
                  {item.label}
                </a>
              ))}
              <div className="px-4 pt-3">
                <a
                  href="#book-demo"
                  aria-label="Book a demo"
                  className="inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2 font-semibold text-white transition-colors duration-200 hover:bg-blue-700 shadow-md"
                >
                  Book a Demo
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;