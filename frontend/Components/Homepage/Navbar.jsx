'use client';

import { useState, useEffect } from "react";
import { User, LogIn, Menu, X, Briefcase, ChevronDown } from 'lucide-react';

const Navbar = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [scrolled, setScrolled] = useState(false);
const [openDropdown, setOpenDropdown] = useState(null);

useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };
    window.addEventListener('scroll', handleScroll);
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
    {
        label: "Log In",
        icon: LogIn,
        dropdown: [
            { href: "/auth/candidatelogin", label: "For Candidates", icon: User },
            { href: "#login-company", label: "For Companies", icon: Briefcase },
        ]
    },
];

return (
    <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}
        aria-label="Main"
    >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-4">
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
                        <a key={item.href} href={item.href} className="relative group font-medium text-slate-700 transition-colors duration-200 hover:text-blue-600">
                            <span>{item.label}</span>
                            <span aria-hidden="true" className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-600 transition-all duration-200 group-hover:w-full" />
                        </a>
                    ))}
                </div>

                {/* Right Side: Action Links and Button with Dropdown */}
                <div className="hidden lg:flex items-center gap-7">
                    {rightNavLinks.map((item) =>
                        item.dropdown ? (
                            // --- Desktop Dropdown ---
                            <div key={item.label} className="relative group">
                                <button className="font-medium text-slate-700 transition-colors duration-200 hover:text-blue-600 flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md">
                                    {item.icon && <item.icon className="w-4 h-4" />}
                                    <span>{item.label}</span>
                                    <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                                </button>
                                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-52 bg-white rounded-xl shadow-lg border border-slate-100 p-2
                                                opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible
                                                transition-all duration-200 ease-out origin-top">
                                    {item.dropdown.map(subItem => (
                                        <a key={subItem.href} href={subItem.href} className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition-colors">
                                            {subItem.icon && <subItem.icon className="w-4 h-4" />}
                                            <span>{subItem.label}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <a key={item.href} href={item.href} className="relative group font-medium text-slate-700 transition-colors duration-200 hover:text-blue-600 flex items-center gap-1">
                                {item.icon && <item.icon className="w-4 h-4" />}
                                <span>{item.label}</span>
                                <span aria-hidden="true" className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-600 transition-all duration-200 group-hover:w-full" />
                            </a>
                        )
                    )}
                    <a href="#book-demo" aria-label="Book a demo" className="inline-flex items-center rounded-md bg-blue-600 px-5 py-2 font-semibold text-white transition-colors duration-200 hover:bg-blue-700 shadow-md hover:shadow-lg">
                        Book a Demo
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button type="button" onClick={() => setIsMenuOpen((v) => !v)} className="p-2 rounded-md text-slate-700 hover:text-blue-600 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 transition-colors" aria-controls="mobile-menu" aria-expanded={isMenuOpen} aria-label="Toggle menu">
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Content with Accordion */}
            {isMenuOpen && (
                <div id="mobile-menu" className="lg:hidden py-3 border-t border-slate-200">
                    <div className="flex flex-col gap-1">
                        {[...mainNavLinks, ...rightNavLinks].map((item) =>
                            item.dropdown ? (
                                // --- Mobile Accordion ---
                                <div key={item.label}>
                                    <button
                                        onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                                        className="w-full flex justify-between items-center px-4 py-2 rounded-md font-medium text-slate-700 hover:bg-blue-50"
                                    >
                                        <span className="flex items-center gap-2">{item.label}</span>
                                        <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                                    </button>
                                    {openDropdown === item.label && (
                                        <div className="pl-8 pt-1 pb-2 flex flex-col gap-1">
                                            {item.dropdown.map(subItem => (
                                                <a key={subItem.href} href={subItem.href} onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-4 py-2 rounded-md text-slate-700 hover:bg-blue-50">
                                                    {subItem.icon && <subItem.icon className="w-4 h-4" />}
                                                    <span>{subItem.label}</span>
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)} className="px-4 py-2 rounded-md font-medium text-slate-700 hover:bg-blue-50 flex items-center gap-2">
                                    {item.label}
                                </a>
                            )
                        )}
                        <div className="px-4 pt-3">
                            <a href="#book-demo" aria-label="Book a demo" className="inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2 font-semibold text-white transition-colors duration-200 hover:bg-blue-700 shadow-md">
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