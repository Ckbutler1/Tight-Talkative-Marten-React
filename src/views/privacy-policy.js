import React from 'react'

import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './privacy-policy.css'

const PrivacyPolicy = (props) => {
  return (
    <div className="privacy-policy-container">
      <Helmet>
        <title>Privacy Policy - Harvest Lane Investment Partners</title>
        <meta property="og:title" content="Privacy Policy - Harvest Lane Investment Partners" />
      </Helmet>
      <Navigation></Navigation>
      <section className="privacy-policy-content">
        <div className="privacy-policy-wrapper">
          <h1 className="privacy-policy-title">Privacy Policy</h1>
          <div className="privacy-policy-body">
            <p className="section-content">
              This is a placeholder for the Privacy Policy page. Content will be added soon.
            </p>
            <p className="section-content">
              Harvest Lane Investment Partners is committed to protecting your privacy and personal information.
            </p>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default PrivacyPolicy
