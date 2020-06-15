import React, { useCallback } from 'react';
import Logo from './Logo';

import NavFooter from './NavFooter';

const Footer = () => {
  const footerLinks: NavLinkType[] = [
    { title: 'github', url: 'http://www.github.com' },
    { title: 'contacts', url: '/contacts' },
    { title: 'rights', url: '/rights' },
  ]

  const backToTop = useCallback(
    () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, []
  );

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__container">
          <Logo />
          <NavFooter links={footerLinks} />
          <div className="footer__top-button-container">
            <span className="footer__top-button-text">Back to top</span>
            <div className="footer__top-button-wrap">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <button
                type="button"
                aria-label="Back to top"
                className="footer__top-button"
                onClick={backToTop}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
