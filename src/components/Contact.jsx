import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import './style.css';

export default function Contact() {
  return (
    <div className="landing">
       <Navbar />

         {/* contact form */}
           <div style={{display: 'flex', justifyContent: 'center'}}>
           <div className="contact-form">
                <h1>Contact Me</h1>
                <form>
                    <input type="text" required placeholder="Name*" />
                    <input required type="email" placeholder="Email*" />
                    <textarea required placeholder="Message*"></textarea>
                    <button>Send</button>
                </form>
            </div>
           </div>
    </div>
  )
}
