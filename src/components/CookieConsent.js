import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CookieConsent.css';

function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-consent">
      <div className="cookie-content">
        <p>Este site utiliza cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa <Link to="/politica-de-privacidade">política de privacidade</Link>.</p>
        <button onClick={acceptCookies}>Entendi</button>
      </div>
    </div>
  );
}

export default CookieConsent;
