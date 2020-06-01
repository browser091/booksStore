import React from "react";

import "./footerStore.scss";

const FooterStore = () => {
  return (
    <div className="footer-store">
      <div className="social-networks">
        <a href="https://vk.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-vk"></i>
        </a>
        <a
          href="https://www.instagram.com/?hl=ru"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://google.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-google-plus-g"></i>
        </a>
        <a
          href="https://facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook"></i>
        </a>
      </div>
    </div>
  );
};

export default FooterStore;
