import React from 'react'

import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './ria-disclosures.css'

const RiaDisclosures = (props) => {
  return (
    <div className="ria-disclosures-container">
      <Helmet>
        <title>RIA Disclosures - Harvest Lane Investment Partners</title>
        <meta property="og:title" content="RIA Disclosures - Harvest Lane Investment Partners" />
      </Helmet>
      <Navigation></Navigation>
      <section className="ria-disclosures-content">
        <div className="ria-disclosures-wrapper">
          <h1 className="ria-disclosures-title">RIA Disclosures</h1>
          <div className="ria-disclosures-body">
            <p className="section-content">
              This is a placeholder for the RIA Disclosures page. Content will be added soon.
            </p>
            <p className="section-content">
              Harvest Lane Investment Partners is a Registered Investment Adviser. All required regulatory disclosures will be available here.
            </p>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default RiaDisclosures
