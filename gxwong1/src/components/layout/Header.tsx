"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { 
      name: "Resources", 
      href: "/resources",
      submenu: [
        { name: "Estate Planning Guide", href: "/resources/estate-planning-guide" },
        { name: "Legal Requirements", href: "/resources/legal-requirements" },
        { name: "FAQ", href: "/resources/faq" }
      ]
    },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="site-header">
      <nav className="container nav" aria-label="Global">
        <div className="nav-start">
          <Link href="/" className="logo-link">
            <span className="site-logo">EstateWealthMY</span>
          </Link>
        </div>

        <div className="nav-mobile-toggle">
          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open main menu"
          >
            <Bars3Icon className="icon" aria-hidden="true" />
          </button>
        </div>

        <div className="nav-links">
          {navigation.map((item) => (
            <div key={item.name} className="nav-item">
              <Link href={item.href} className="nav-link">
                {item.name}
              </Link>
              {item.submenu && (
                <div className="nav-dropdown">
                  <div className="nav-dropdown-inner">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="nav-sublink"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="nav-cta">
          <Link href="/contact" className="btn-primary cta">
            Free Consultation
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="mobile-overlay"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <Link href="/" className="logo-link">
                <span className="site-logo">EstateWealthMY</span>
              </Link>
              <button
                type="button"
                className="mobile-toggle"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <XMarkIcon className="icon" aria-hidden="true" />
              </button>
            </div>
            <div className="mobile-links">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="mobile-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mobile-cta">
                <Link
                  href="/contact"
                  className="btn-primary full-width"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
