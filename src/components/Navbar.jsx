import React from 'react'
import logoImg from '../assets/images/Logo.png'

function Navbar() {
  return (
      <div data-animation="default" data-collapse="medium" style={{paddingTop: '15px'}} data-duration={300} data-easing="ease" data-easing2="ease" data-no-scroll={1} role="banner" className="navbar ar w-nav">
        <div className="container in-nav w-container">
          <a href="/" className="brand w-nav-brand">
            <img src={logoImg} loading="eager" width={215} sizes="250px"  style={{height: '100px'}} alt="مسيرتك" className="ischool-logo ar" />
          </a>
          <nav role="navigation" className="nav-menu w-nav-menu" style={{justifyContent: 'space-around'}}>
            <div className="navlinks-wrapper ar">
              <a href="#students" className="nav-link w-inline-block">
                <div className="navlink-text">الرئيسية</div>
              </a>
              <a href="#parents" className="nav-link w-inline-block">
                <div className="navlink-text">نبذة عننا</div>
              </a>
              <a href="#why_ischool" className="nav-link w-inline-block">
                <div className="navlink-text">خدماتنا</div>
              </a>
              <a href="#our-blog" className="nav-link w-inline-block">
                <div className="navlink-text">المنح التعليمية</div>
              </a>
            </div>
            <div className="navbtns-wrapper">
              <a href="#!" className="primary_button whatsapp sm w-button" style={{marginLeft: '50px'}}>تواصل معنا</a>
              <a id="toggleButton" href="#!" className="language-toggle-static w-inline-block">
                <i className="fa-solid fa-globe" />
                <div id="langName" className="lang-name">EN</div>
              </a>
            </div>
          </nav>
          <a id="toggleButton" href="#!" className="language-toggle-static mobile ar w-inline-block">
            <i className="fa-solid fa-globe" />
            <div id="langName" className="lang-name">EN</div>
          </a>
          <div className="menu-button-2 ar w-nav-button">
            <div className="icon w-icon-nav-menu" />
          </div>
        </div>
      </div>
  )
}

export default Navbar