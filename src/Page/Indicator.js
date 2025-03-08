import React, { useState, useEffect } from "react";
import { FaArrowUp, FaWhatsapp } from "react-icons/fa";
import './page.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200); // Show button after scrolling 200px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll-To-Top Button */}
      <div className={`scroll-to-top ${isVisible ? "visible" : ""}`} onClick={scrollToTop}>
        <FaArrowUp className="icon" />
      </div>

      {/* WhatsApp Floating Icon (Below Scroll-to-Top) */}
      <a 
  href="https://wa.me/919788525856" 
  className="whatsapp-icon" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <FaWhatsapp className="whatsapp" />
</a>

    </>
  );
};

export default ScrollToTop;
