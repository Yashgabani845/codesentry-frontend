'use client'
import { useState } from "react";

const UserIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const LogInIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
  </svg>
);


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mainNavLinks = [
    { href: "#platform", label: "Platform" },
    { href: "#solutions", label: "Solutions" },
    { href: "#resources", label: "Resources" },
    { href: "#company", label: "Company" },
    { href: "#pricing", label: "Pricing" },
  ];

  const rightNavLinks = [
    { href: "#for-learners", label: "For Learners", icon: UserIcon },
    { href: "#login", label: "Log In", icon: LogInIcon },
  ];

  return (
    <nav
      className="sticky top-0 z-50 bg-background "
      aria-label="Main"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
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
                className="relative group font-medium text-foreground transition-colors duration-200 hover:text-foreground"
              >
                <span className="inline-block">{item.label}</span>
                <span
                  aria-hidden="true"
                  className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-600 transition-all duration-200 group-hover:w-full"
                />
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-7">
            {rightNavLinks.map((item) => (
               <a
                key={item.href}
                href={item.href}
                className="relative group font-medium text-foreground transition-colors duration-200 hover:text-foreground flex items-center gap-1"
              >
                {item.icon && <item.icon className="w-4 h-4" />} {/* Render icon if it exists */}
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
              className="inline-flex items-center rounded-md bg-blue-600 px-5 py-2 font-semibold text-white transition-colors duration-200 hover:bg-blue-700"
            >
              Book a Demo
            </a>
          </div>

          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen((v) => !v)}
              className="p-2 rounded-md text-foreground hover:text-blue-600 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div id="mobile-menu" className="lg:hidden py-3 border-t border-border">
            <div className="flex flex-col gap-1">
              {[
                ...mainNavLinks,
                ...rightNavLinks.map(item => ({ ...item, label: item.label, icon: undefined })) 
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-2 rounded-md font-medium text-foreground transition-colors duration-200 hover:bg-foreground/[0.04] flex items-center gap-2"
                >
                  {item.icon && <item.icon className="w-5 h-5" />} 
                  {item.label}
                </a>
              ))}
              
              <div className="px-4 pt-3">
                <a
                  href="#book-demo"
                  aria-label="Book a demo"
                  className="inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2 font-semibold text-white transition-colors duration-200 hover:bg-blue-700"
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