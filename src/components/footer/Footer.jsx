import React from "react";

import "./footer.css";

const Footer = () => (
  <div className="footer">
    <p className="footer-copyright">
      &copy; kola Sample Inc. {new Date().getFullYear()}
    </p>
  </div>
);

export default Footer;
