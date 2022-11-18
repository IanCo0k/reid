import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './style.css';

export default function Videos() {
  return (
    <div>
        <Navbar />

        <div style = {{display: 'flex', justifyContent: 'center'}}>
            <div className="videos">
                <h1>Videos</h1>
                <div className="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/35d33rm5Zbk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/7Yy4TXgT5yI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/7gcJv25RVQY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>


        <Footer />
    </div>
  )
}
