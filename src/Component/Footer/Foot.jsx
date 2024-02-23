import React from 'react'
import './Foot.css'
function footer  ()  {
  return (
     <>
     <link rel="stylesheet" href=" https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      <div className='main'>
        <div className="name">
           <div className="l">
           <img src="./PhotoGallery/clubexcellogo.webp" alt="" srcset="" />
           </div>
           <div className="vl"></div>
           <div className="m">
            <div className="link">REGISTER</div>
            <div className="link">CONTACT</div>
            <div className="link">OUR TEAM</div>
           </div>
           <div className="vl"></div>
           <div className='footerSocial'>
        <p>SOCIALIZE WITH CLUB EXCEL</p>
        <div className='sociaMedia'>
          <div><a href="/"><i className="fa-brands fa-instagram"></i></a></div>
          <div><a href="/"><i className="fa-brands fa-twitter "></i></a></div>
          <div><a href="/"><i className="fa-brands fa-facebook-f"></i></a></div>
          <div><a href="/"><i className="fa-brands fa-linkedin-in"></i></a></div>
        </div>
        <div className='footerContact'>
        <a href="/"><button>CONTACT US</button></a>
        </div>
      </div>
            </div>
             <div className="hrr"></div>
            <div className="space">
              <p>2023 © Club Excel - ALL RIGHTS RESERVED</p>
            </div>
      </div>
     </>
  )
}

export default footer
