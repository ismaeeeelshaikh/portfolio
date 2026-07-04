"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-md shadow-black/50 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold font-mono text-white">
          <span className="text-cyber-blue">&lt;</span>Ismaeel<span className="text-aws-orange">/&gt;</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-wider relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyber-blue transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="/Resume.pdf"
            download
            className="px-5 py-2 border border-cyber-blue text-cyber-blue rounded font-medium hover:bg-cyber-blue/10 transition-colors"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass absolute top-full left-0 w-full flex flex-col py-4 border-t border-white/5"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-6 py-3 text-gray-300 hover:text-white hover:bg-white/5 uppercase tracking-wider text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/Resume.pdf"
            download
            className="mx-6 mt-4 px-5 py-2 border border-cyber-blue text-cyber-blue rounded font-medium hover:bg-cyber-blue/10 transition-colors text-center"
          >
            Download Resume
          </a>
        </motion.div>
      )}
    </header>
  );
}
