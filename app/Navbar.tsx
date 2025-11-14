"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "../public/logo.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="py-6 bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="container mx-auto flex items-center justify-between px-4">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <a href="/">
              <Image src={logo} alt="Progrize logo" className="w-auto h-8" />
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10 text-sm tracking-wider text-muted">
            <a href="#features" className="hover:text-primary">Features</a>
            <a href="#testimonials" className="hover:text-primary">Testimonials</a>
            <a href="/upcoming" className="hover:text-primary">Resources</a>
          </nav>

          {/* Desktop Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="/upcoming"
              className="px-4 py-2 bg-primary text-white rounded-md text-sm hover:opacity-95"
            >
              Beta
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Open menu"
            className="md:hidden p-2"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-4 px-6 py-4 bg-white border-t border-gray-200 text-sm tracking-wide">
            <a href="#features" className="py-2 hover:text-primary">Features</a>
            <a href="#testimonials" className="py-2 hover:text-primary">Testimonials</a>
            <a href="/upcoming" className="py-2 hover:text-primary">Resources</a>
            <a
              href="/upcoming"
              className="mt-2 px-4 py-2 bg-primary text-white text-center rounded-md"
            >
              Beta
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
