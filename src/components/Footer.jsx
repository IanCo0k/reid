import React from 'react'
import './style.css';

export default function Footer() {
  return (
    <div className="footer gradient4">
        <div className="social-media">
          {/* facebook, instagram, twitter logo icons */}
          <a href="https://www.facebook.com/ReidyourRealtor"><img src="https://img.icons8.com/ios/50/000000/facebook-new.png" alt="facebook" /></a>
          <a href="https://www.instagram.com/reidyourrealtor/"><img src="https://img.icons8.com/ios/50/000000/instagram-new.png" alt="instagram" /></a>
          <a href="https://www.youtube.com/channel/UCCfLPwiwNIduTs4henLSZZw"><img src="https://img.icons8.com/ios/50/000000/youtube-play.png" alt="youtube" /></a>
        </div>

        <div className="contact">
          <p>Phone: 616-644-9807</p>
        </div>
      </div>  
  )
}
