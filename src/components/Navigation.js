import React from 'react'
// import { Link } from 'react-router-dom';

function NavigationBar(){
  return (
    <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
      <div className="container">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active px-lg-4">
              <a className="nav-link text-uppercase text-expanded" to="/">Home
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item px-lg-4">
              <a className="nav-link text-uppercase text-expanded"  href="/about">About</a>
            </li>
            <li className="nav-item px-lg-4">
              <a className="nav-link text-uppercase text-expanded"  href="/services">Services</a>
            </li>
            <li className="nav-item px-lg-4">
              <a className="nav-link text-uppercase text-expanded"  href="/blog">Blog</a>
            </li>
            <li className="nav-item px-lg-4">
              <a className="nav-link text-uppercase text-expanded"  href="/contacts">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar;