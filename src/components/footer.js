import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container1">
      <footer className="footer-wrapper">
        <div className="footer-container">
          <div className="footer-main-grid">
            <div className="footer-brand-col footer-column">
              <div className="footer-logo-lockup">
                <span className="footer-brand-name">Harvest Lane</span>
                <span className="footer-brand-tagline">
                  Investment Partners
                </span>
              </div>
              <div className="footer-contact-info">
                <div className="footer-info-item">
                  <div className="footer-icon-wrapper">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                        <circle r="3" cx="12" cy="10"></circle>
                      </g>
                    </svg>
                  </div>
                  <p className="section-content">
                    9065 S 1300 E, Sandy, UT 84094
                  </p>
                </div>
                <div className="footer-info-item">
                  <div className="footer-icon-wrapper">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <p className="section-content">801-340-0545</p>
                </div>
              </div>
              <div className="footer-social-links">
                <a href="#" aria-label="LinkedIn Profile" className="footer-social-btn">
                  <svg width="20" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24">
                    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
                      <circle r="2" cx="4" cy="4"></circle>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
            <nav aria-labelledby="footer-nav-title" className="footer-nav-col footer-column">
              <h2 id="footer-nav-title" className="footer-heading">Navigation</h2>
              <ul className="footer-link-list">
                <li><Link to="/"><div className="footer-link"><span>Home</span></div></Link></li>
                <li><Link to="/investment-process"><div className="footer-link"><span>Investment Process</span></div></Link></li>
                <li><Link to="/planning-services"><div className="footer-link"><span>Planning Services</span></div></Link></li>
                <li><Link to="/insights"><div className="footer-link"><span>Insights</span></div></Link></li>
                <li><Link to="/about-contact"><div className="footer-link"><span>About / Contact</span></div></Link></li>
              </ul>
            </nav>
            <div className="footer-philosophy-col footer-column">
              <h2 className="footer-heading">Our Commitment</h2>
              <p className="footer-description section-content">
                Harvest Lane is a Registered Investment Adviser dedicated to
                long-term resilience and disciplined stewardship. We prioritize
                insight that transcends spreadsheets to uncover true market
                opportunity.
              </p>
              <div className="footer-ria-badge">
                <span className="footer-ria-text">
                  Registered Investment Adviser
                </span>
              </div>
            </div>
          </div>
          <div className="footer-compliance-divider"></div>

          <div className="footer-compliance-section">
            <div className="footer-legal-grid">
              <div className="footer-legal-links">
                <Link to="/privacy-policy"><div className="footer-legal-link"><span>Privacy Policy</span></div></Link>
                <span aria-hidden="true" className="footer-legal-separator">•</span>
                <Link to="/terms-of-service"><div className="footer-legal-link"><span>Terms of Service</span></div></Link>
                <span aria-hidden="true" className="footer-legal-separator">•</span>
                <Link to="/ria-disclosures"><div className="footer-legal-link"><span>RIA Disclosures</span></div></Link>
              </div>

              <div className="footer-copyright"><p className="footer-copyright-text section-content">© 2026 Harvest Lane Investment Partners. All Rights Reserved.</p></div>
            </div>

            <div className="footer-disclosure-block">
              <p className="footer-disclosure-text section-content">Investing involves risk, including the potential loss of principal. Harvest Lane Investment Partners is a Registered Investment Adviser. Information provided is for educational purposes and does not constitute investment, legal, or tax advice. Past performance is not indicative of future results.</p>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-container2">
        <div className="footer-container3">
          <Script html={`<script defer data-name="footer-scroll-reveal">(function(){const footerObserverOptions={threshold:0.1};const footerObserver=new IntersectionObserver((entries)=>{entries.forEach((entry)=>{if(entry.isIntersecting){entry.target.style.opacity="1";entry.target.style.transform="translateY(0)";footerObserver.unobserve(entry.target)}})},footerObserverOptions);const footerColumns=document.querySelectorAll(".footer-column");footerColumns.forEach((col,index)=>{col.style.opacity="0";col.style.transform="translateY(20px)";col.style.transition=\`all 0.6s ease-out \${index*0.15}s\`;footerObserver.observe(col)})})()</script>`}></Script>
        </div>
      </div>
    </div>
  )
}

export default Footer
