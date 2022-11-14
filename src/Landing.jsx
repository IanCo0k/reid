import React from 'react'
import reid from './components/assets/reid.png';
import homepage from './components/assets/homepage.png';
import './components/style.css';

export default function Landing() {
  return (
    <div className="landing">
      {/* navbar div with img on left side and nav links on right side */}
      <div className="navbar">
        <div className="logo">
          <img src={reid} alt="logo" />
        </div>
        <div className="nav-links">
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Videos</a>
        </div>
      </div>

      {/* hero div with text and button */}
      <div className="hero">
        <div className="hero-text">
          <h1>Hi, I'm Reid</h1>
          <p>Licensed Realtor</p>
          <a href="https://reidnicholson.successrealtywm.com/"><button>Learn More</button></a>
        </div>
        <div className="hero-img">
          <img src={homepage} alt="hero" />
        </div>
      </div>

      {/* footer div with social media links */}
      <div className="footer">
        <div className="social-media">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
        </div>

        <div className="contact">
          <p>Phone: 123-456-7890</p>
        </div>
      </div>  

    </div>
  )
}
