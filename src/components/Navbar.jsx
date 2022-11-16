import React from 'react'
import reid from './assets/reid.png';
import './style.css';

export default function Navbar() {
  return (
    <div className="navbar">
    <div className="logo">
      <a href="/"><img src={reid} alt="logo" /></a>
      <a href="/"><p>Reid Your Realtor</p></a>
    </div>
    <div className="nav-links">
      <a href="/">Testimonials</a>
      <a href="/contact">Contact</a>
      <a href="/videos">Videos</a>
    </div>


  </div>
  )
}
