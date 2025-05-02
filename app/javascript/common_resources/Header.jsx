import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import { Smartphone, IndianRupee, Menu, Search } from "lucide-react";

const Header = () => {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="left">
          <Link href="/" className="logo">
            <div className="icon">
              <Smartphone className="icon-phone" />
              <IndianRupee className="icon-rupee" />
            </div>
            <div className="text">
              <span className="site-name">PhoneHub</span>
              <span className="tagline">India's #1 Mobile Guide</span>
            </div>
          </Link>
          <nav className="nav">
            <Link href="/price-range/under-10000">
              <span className={location === "/price-range/under-10000" ? "active" : ""}>Under ₹10K</span>
            </Link>
            <Link href="/price-range/10000-to-20000">
              <span className={location === "/price-range/10000-to-20000" ? "active" : ""}>₹10K–₹20K</span>
            </Link>
            <Link href="/price-range/20000-to-35000">
              <span className={location === "/price-range/20000-to-35000" ? "active" : ""}>₹20K–₹35K</span>
            </Link>
            <Link href="/price-range/above-35000">
              <span className={location === "/price-range/above-35000" ? "active" : ""}>Premium ₹35K+</span>
            </Link>
          </nav>
        </div>
        <div className="right">
          <button className="menu-button" onClick={toggleMobileMenu}>
            <Menu />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          <Link href="/price-range/under-10000">Under ₹10K</Link>
          <Link href="/price-range/10000-to-20000">₹10K–₹20K</Link>
          <Link href="/price-range/20000-to-35000">₹20K–₹35K</Link>
          <Link href="/price-range/above-35000">Premium ₹35K+</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
