import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Tight Talkative Marten</title>
        <meta property="og:title" content="Tight Talkative Marten" />
        <link
          rel="canonical"
          href="https://tight-talkative-marten-ai9fzd.teleporthq.app/"
        />
      </Helmet>
      <Navigation></Navigation>
      <section className="hero-section">
        <div className="hero-media-container">
          <img
            alt="Modern architectural lines reflecting stability"
            src="https://images.pexels.com/photos/140981/pexels-photo-140981.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
            className="hero-bg-image"
          />
          <div className="hero-scrim"></div>
        </div>
        <div className="hero-content-wrapper">
          <div className="home-thq-hero-text-block-elm hero-text-block">
            <h1 className="home-thq-hero-title-elm home-hero-title hero-title">
              Experience + Discipline = Results.
            </h1>
            <p className="home-hero-subtitle hero-subtitle">
              Harvest Lane has one mandate: your best interest.
            </p>
            <div className="hero-divider"></div>
          </div>
        </div>
      </section>
      <section className="philosophy-band">
        <div className="philosophy-container">
          <div className="philosophy-card">
            <h2 className="section-title">A Discipline Beyond Formulas</h2>
            <p className="section-content">
              Our approach combines rigorous research with a broad understanding
              of markets, history, and human behavior. We believe true long-term
              success comes from insight that transcends spreadsheets and
              identifies risks beyond the herd.
            </p>
            <a href="/investment-process">
              <div className="philosophy-cta btn-lg btn btn-outline">
                <span>Explore Our Philosophy</span>
                <svg
                  fill="none"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14m-7-7 7 7-7 7"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="process-preview">
        <div className="process-container">
          <div className="process-header">
            <h2 className="section-title">Investment Process</h2>
            <p className="section-subtitle">
              Disciplined execution across every stage of the lifecycle.
            </p>
          </div>
          <div className="process-grid">
            <div className="process-item">
              <div className="process-icon-box">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle r="8" cx="11" cy="11"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
              </div>
              <h3 className="process-item-title">Research Framework</h3>
              <p className="section-content">
                Rigorous fundamental analysis blended with geopolitical and
                demographic perspective to uncover mispriced assets.
              </p>
              <a href="/investment-process#research">
                <div className="btn-link btn">
                  <span>Learn More</span>
                </div>
              </a>
            </div>
            <div className="process-item">
              <div className="process-icon-box">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2.062 12.348a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 19.876 0a1 1 0 0 1 0 .696a10.75 10.75 0 0 1-19.876 0"></path>
                  <circle r="3" cx="12" cy="12"></circle>
                </svg>
              </div>
              <h3 className="process-item-title">Scenario Analysis</h3>
              <p className="section-content">
                Stress-testing portfolios against unconventional outcomes and
                identifying the likelihood of shifting landscapes.
              </p>
              <a href="/investment-process#scenario">
                <div className="btn-link btn">
                  <span>Learn More</span>
                </div>
              </a>
            </div>
            <div className="process-item">
              <div className="process-icon-box">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3v18m7-13l3 8a5 5 0 0 1-6 0zV7"></path>
                  <path d="M3 7h1a17 17 0 0 0 8-2a17 17 0 0 0 8 2h1M5 8l3 8a5 5 0 0 1-6 0zV7m2 14h10"></path>
                </svg>
              </div>
              <h3 className="process-item-title">Portfolio Construction</h3>
              <p className="section-content">
                Strategic allocation focused on long-term resilience,
                flexibility, and the preservation of client capital.
              </p>
              <a href="/investment-process#construction">
                <div className="btn-link btn">
                  <span>Learn More</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="services-overview">
        <div className="services-container">
          <div className="services-grid">
            <div className="services-intro">
              <h2 className="section-title">Planning Services</h2>
              <p className="section-content">
                Comprehensive wealth coordination designed for the complexities
                of high-net-worth families and individual stewards.
              </p>
              <a href="/planning-services">
                <div className="btn-primary btn-lg btn">
                  <span>View All Services</span>
                </div>
              </a>
            </div>
            <div className="services-list">
              <div className="service-card">
                <h3 className="service-title">Family Governance</h3>
                <p className="section-content">
                  Estate coordination and intergenerational strategy to ensure
                  legacy continuity.
                </p>
              </div>
              <div className="service-card">
                <h3 className="service-title">Liquidity Awareness</h3>
                <p className="section-content">
                  Strategic tax awareness and cash flow planning for complex
                  asset structures.
                </p>
              </div>
              <div className="service-card">
                <h3 className="service-title">Individual Planning</h3>
                <p className="section-content">
                  Tailored financial roadmaps that adapt to changing life stages
                  and market conditions.
                </p>
              </div>
              <div className="service-card">
                <h3 className="service-title">Portfolio Resilience</h3>
                <p className="section-content">
                  Stress-testing and risk management focused on capital
                  preservation across generations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="insights-preview">
        <div className="insights-container">
          <div className="insights-header">
            <h2 className="section-title">Latest Insights</h2>
            <a href="/insights">
              <div className="btn-link btn">
                <span>View All Articles</span>
              </div>
            </a>
          </div>
          <div className="insights-grid">
            <article className="insight-card">
              <div className="insight-image-box">
                <img
                  alt="Geometric architectural texture"
                  src="https://images.pexels.com/photos/6220941/pexels-photo-6220941.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="insight-img"
                />
              </div>
              <div className="insight-content">
                <time datetime="2024-03-15" className="insight-date">
                  March 15, 2024
                </time>
                <h3 className="insight-title">
                  The Fallacy of Formulaic Investing
                </h3>
                <p className="section-content">
                  Why quantitative models often fail to capture the nuances of
                  human behavior and geopolitical shifts.
                </p>
                <a href="/insights/article-1">
                  <div className="btn-link btn">
                    <span>Read More</span>
                  </div>
                </a>
              </div>
            </article>
            <article className="insight-card">
              <div className="insight-image-box">
                <img
                  alt="Modern glass skyscraper texture"
                  src="https://images.pexels.com/photos/18567281/pexels-photo-18567281.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="insight-img"
                />
              </div>
              <div className="insight-content">
                <time datetime="2024-02-28" className="insight-date">
                  February 28, 2024
                </time>
                <h3 className="insight-title">Identifying Market Mispricing</h3>
                <p className="section-content">
                  A deep dive into our research framework for uncovering
                  opportunities beyond the herd mentality.
                </p>
                <a href="/insights/article-2">
                  <div className="btn-link btn">
                    <span>Read More</span>
                  </div>
                </a>
              </div>
            </article>
            <article className="insight-card">
              <div className="insight-image-box">
                <img
                  alt="Geometric marble texture"
                  src="https://images.pexels.com/photos/1652544/pexels-photo-1652544.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="insight-img"
                />
              </div>
              <div className="insight-content">
                <time datetime="2024-01-12" className="insight-date">
                  January 12, 2024
                </time>
                <h3 className="insight-title">The Resilience Mandate</h3>
                <p className="section-content">
                  How a family-office sensibility informs our approach to
                  long-term wealth preservation.
                </p>
                <a href="/insights/article-3">
                  <div className="btn-link btn">
                    <span>Read More</span>
                  </div>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="principles-band">
        <div className="principles-container">
          <div className="principles-grid">
            <div className="principle-item">
              <div className="principle-icon">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                </svg>
              </div>
              <span className="principle-text">
                Discreet Family-Office Sensibility
              </span>
            </div>
            <div className="principle-item">
              <div className="principle-icon">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                  <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2M9 9h1m-1 4h6m-6 4h6"></path>
                </svg>
              </div>
              <span className="principle-text">Research-Driven Discipline</span>
            </div>
            <div className="principle-item">
              <div className="principle-icon">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48 48 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0q1.515.215 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a6 6 0 0 1-2.031.352a6 6 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202zm-16.5.52q1.485-.305 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a6 6 0 0 1-2.031.352a6 6 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202z"></path>
                </svg>
              </div>
              <span className="principle-text">Client-First Stewardship</span>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-block">
        <div className="contact-container">
          <div className="contact-card">
            <div className="contact-info">
              <h2 className="section-title">
                Harvest Lane Investment Partners
              </h2>
              <div className="contact-details">
                <div className="contact-item">
                  <svg
                    fill="none"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    stroke="currentColor"
                    viewbox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle r="3" cx="12" cy="10"></circle>
                  </svg>
                  <address className="contact-text">
                    <span>9065 S 1300 E, Sandy, UT 84094</span>
                  </address>
                </div>
                <div className="contact-item">
                  <svg
                    fill="none"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    stroke="currentColor"
                    viewbox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <a href="tel:8013400545">
                    <div className="contact-text">
                      <span>801-340-0545</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-action">
              <a href="/about-contact">
                <div className="btn-lg btn btn-outline">
                  <span>About Our Firm</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="home-container2">
        <div className="home-container3">
          <Script
            html={`<script defer data-name="harvest-lane-interactions">
(function(){
  // Intersection Observer for scroll-triggered reveal animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
        revealObserver.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Apply initial states and observe elements
  document.querySelectorAll(".process-item, .service-card, .insight-card").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "all 0.6s ease-out"
    revealObserver.observe(el)
  })

  // Subtle parallax for hero background
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const heroImage = document.querySelector(".hero-bg-image")
    if (heroImage) {
      heroImage.style.transform = \`translateY(\${scrolled * 0.3}px)\`
    }
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
