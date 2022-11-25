import React from 'react'
import homepage from './components/assets/homepage.png';
import stocks from './components/assets/stocks.jpg';
import john from './components/assets/john.jpg';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './components/style.css';

export default function Landing() {
  return (
    <div className="landing">
      {/* navbar div with img on left side and nav links on right side */}
      <Navbar />

      {/* hero div with text and button */}
      <div className="hero">
        
        <div className="hero-text">
          <h1>Hi, I'm Reid</h1>
          <p>Licensed <span>Realtor</span></p>
          <a href="https://reidnicholson.successrealtywm.com/"><button>Listings</button></a>
        </div>
        <div className="hero-img">
          <img src={homepage} alt="hero" />
        </div>
      </div>

      <div className="hero reverse gradient1">

        <div className="hero-text">
          <h1>Interested in stocks?</h1>
          <p>Let's <span>chat</span></p>
          <a href="./contact"><button>Learn More</button></a>
        </div>

        <div className="hero-img">
            <img src={stocks} alt="hero" />
        </div>
      </div>

      <div className="hero gradient2">

        <div className="hero-text">
          <h1>Helping people like you</h1>
          <p>"Reid was very helpful in the home buying process. He helped us find a home that fit us perfectly and made the process as stress free as it could be"</p>
          <a href="https://reidnicholson.successrealtywm.com/"><button>Let me help you!</button></a>
        </div>

        <div className="hero-img">
            <img src={stocks} alt="hero" />
        </div>
      </div>


      <Footer />
      

    </div>
  )
}
