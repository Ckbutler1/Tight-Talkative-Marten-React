import React from 'react'

import Script from 'dangerous-html/react'

import './navigation.css'

const Navigation = (props) => {
  return (
    <div className="navigation-container1">
      <nav className="navigation-wrapper">
        <div className="navigation-container">
          <a href="/">
            <div
              aria-label="Harvest Lane Investment Partners Home"
              className="navigation-logo"
            >
              <span className="navigation-brand section-title">
                Harvest Lane
              </span>
              <span className="navigation-tagline">Investment Partners</span>
            </div>
          </a>
          <div className="navigation-desktop-menu">
            <ul className="navigation-links">
              <li>
                <a href="/">
                  <div className="active navigation-link">
                    <span>Home</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="/investment-process">
                  <div className="navigation-link">
                    <span>Investment Process</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="/planning-services">
                  <div className="navigation-link">
                    <span>Planning Services</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="/about-contact">
                  <div className="navigation-link">
                    <span>About / Contact</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="/insights">
                  <div className="navigation-link">
                    <span>Insights</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <button
            id="navToggle"
            aria-label="Toggle navigation menu"
            aria-controls="mobileOverlay"
            aria-expanded="false"
            className="navigation-mobile-toggle"
          >
            <svg
              fill="none"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <div id="mobileOverlay" className="navigation-mobile-overlay">
          <div className="navigation-mobile-header">
            <a href="/">
              <div
                aria-label="Harvest Lane Investment Partners Home"
                className="navigation-logo"
              >
                <span className="navigation-brand section-title">
                  Harvest Lane
                </span>
              </div>
            </a>
            <button
              id="navClose"
              aria-label="Close navigation menu"
              className="navigation-mobile-close"
            >
              <svg
                fill="none"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6L6 18M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div className="navigation-mobile-content">
            <ul className="navigation-mobile-links">
              <li>
                <a href="/">
                  <div className="navigation-mobile-link">
                    <span>Home</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="/investment-process">
                  <div className="navigation-mobile-link">
                    <span>Investment Process</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="/planning-services">
                  <div className="navigation-mobile-link">
                    <span>Planning Services</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="/about-contact">
                  <div className="navigation-mobile-link">
                    <span>About / Contact</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="/insights">
                  <div className="navigation-mobile-link">
                    <span>Insights</span>
                  </div>
                </a>
              </li>
            </ul>
            <div className="navigation-mobile-footer">
              <p className="section-content">9065 S 1300 E, Sandy, UT 84094</p>
              <p className="section-content">801-340-0545</p>
            </div>
          </div>
        </div>
      </nav>
      <div className="navigation-container2">
        <div className="navigation-container3">
          <Script
            html={`<script defer data-name="navigation-logic">
(function(){
  const navToggle = document.getElementById("navToggle")
  const navClose = document.getElementById("navClose")
  const mobileOverlay = document.getElementById("mobileOverlay")
  const body = document.body

  function openMenu() {
    mobileOverlay.classList.add("is-open")
    navToggle.setAttribute("aria-expanded", "true")
    body.style.overflow = "hidden"
  }

  function closeMenu() {
    mobileOverlay.classList.remove("is-open")
    navToggle.setAttribute("aria-expanded", "false")
    body.style.overflow = ""
  }

  navToggle.addEventListener("click", openMenu)
  navClose.addEventListener("click", closeMenu)

  const mobileLinks = document.querySelectorAll(".navigation-mobile-link")
  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMenu)
  })

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileOverlay.classList.contains("is-open")) {
      closeMenu()
    }
  })

  let lastScroll = 0
  const navWrapper = document.querySelector(".navigation-wrapper")

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset

    if (currentScroll > 50) {
      navWrapper.style.boxShadow = "0 4px 20px rgba(10, 42, 74, 0.05)"
    } else {
      navWrapper.style.boxShadow = "none"
    }

    lastScroll = currentScroll
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Navigation
