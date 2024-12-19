import React from 'react'

function Header() {
    return (
      <header className="header">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
          <a className="navbar-brand" href="/"><img src="../logo.jpg" alt="Logo" width="50" height="50" className="d-inline-block align-text-top"/></a>
            <h1 style={{"padding-left":"200px","font-weight": "bold"}}>Crop Disease Dectection</h1>
            <div>
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/" style={{"color":"black"}}>Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/about" style={{"color":"black"}}>About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/contact" style={{"color":"black"}}>Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
  </header>
    );
  }
  
  export default Header;