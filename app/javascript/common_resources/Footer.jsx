import { Smartphone, IndianRupee } from "lucide-react";
import React, { useState } from "react";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-brand">
          <div className="logo-icon">
            <Smartphone className="icon" />
            <IndianRupee className="icon small" />
          </div>
          <div className="brand-text">
            <h1 className="site-name">PhoneHub</h1>
            <p className="tagline">Your trusted mobile buying guide</p>
          </div>
        </div>
        <div className="footer-links">
          <a href="/price-range/under-10000">Under ₹10K</a>
          <a href="/price-range/10000-to-20000">₹10K–₹20K</a>
          <a href="/price-range/20000-to-35000">₹20K–₹35K</a>
          <a href="/price-range/above-35000">Premium ₹35K+</a>
          <a href="/about">About</a>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} PhoneHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
