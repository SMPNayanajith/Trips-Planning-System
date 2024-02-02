import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="top">
          <div className="textd">
            <h1>Trippy</h1>
            <p>Choose your favorite destinations.</p>
          </div>
          <div className="links">
            <a href="https://web.facebook.com/">
              <i className='fa-brands fa-facebook-square'></i>
            </a>
            <a href="https://www.instagram.com/">
              <i className='fa-brands fa-instagram-square'></i>
            </a>
            <a href="https://www.behance.net/">
              <i className='fa-brands fa-behance-square'></i>
            </a>
            <a href="https://twitter.com/">
              <i className='fa-brands fa-twitter-square'></i>
            </a>
          </div>

        </div>

        <div className="bottom">
          <div className="column">
            <h4>Project</h4>
            <a href="/">ChangeLog</a>
            <a href="/">Status</a>
            <a href="/">Licence</a>
            <a href="/">All Versions</a>
          </div>
          <div className="column">
            <h4>Community</h4>
            <a href="/">GitHub</a>
            <a href="/">Issues</a>
            <a href="/">Project</a>
            <a href="/">Twitter </a>
          </div>
          <div className="column">
            <h4>Help</h4>
            <a href="/">Support</a>
            <a href="/">TroubleShooting</a>
            <a href="/">ContactUs</a>
          </div>
          <div className="column">
            <h4>Others</h4>
            <a href="/">TermsOfService</a>
            <a href="/">PrivacyPolicies</a>
            <a href="/">Licence</a>
          </div>
        </div>
      </div>
    </div>
  )
}
