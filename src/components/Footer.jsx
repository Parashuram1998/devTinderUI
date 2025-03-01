import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-300 text-base-content rounded p-8 bottom-0 fixed h-0">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          Parasharam Pujari
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
