import "./index.scss";
import { useState, useEffect } from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer-container w-100 p-3">
      <p>Copyright © {year} Michael Varga</p>
    </div>
  )
}

export default Footer;
