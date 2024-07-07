import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="footer-content"> 
            <div className='footer-name'> © 2024 Clara Sithidej </div>
            <div> Lyon, France </div>

            <div className="footer-socials">
              <a href="mailto:clara.stihidej@gmail.com" className="social-icon" title='Email'>
                <img src="/images/icon/email.png" alt="Email" />
              </a>
              <a href="https://www.linkedin.com/in/clara-sithidej/" className="social-icon" title='LinkedIn'>
                <img src="/images/icon/linkedin.png" alt="LinkedIn" />
              </a>
              <a href="https://github.com/Coaraa" className="social-icon" title='GitHub'>
                <img src="/images/icon/github.png" alt="GitHub" />
              </a>
            </div>
          </div>

        </div>
      </footer>
    </div>
  )
}

export default Footer
