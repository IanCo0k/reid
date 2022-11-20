import React from 'react'
import { useState } from 'react';
import reid from './assets/reid.png';
import './style.css';


export default function Navbar() {

  const [show, setShow] = useState(false);

  return (
    <div className="mobile">
    <div className="navbar">
      <div className="logo">
        <a href="/"><img src={reid} alt="logo" /></a>
        <a href="/"><p>Reid Your Realtor</p></a>
      </div>

      {/* hamburger */}
      <div onClick={()=>setShow(!show)} className={show ? 'hamburger' : 'hamburger flip'}>
        <img className="hamburger-img" src="https://img.icons8.com/ios/50/000000/menu.png" alt="hamburger" />
      </div>




      <div className="nav-links">
        <a href="/">Testimonials</a>
        <a href="./contact">Contact</a>
        <a href="./videos">Videos</a>
      </div>


    </div>
    <div className={show ? 'nav-links-dropdown' : 'hide'}>
      <ul className="nav-links-drop">
        <li><a href="/">Home</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/videos">Videos</a></li>
      </ul>
    </div>
    </div>


  )
}
