 import "./Navbar.css";
 import React from 'react';
  export default function Navbar(props) {
  return <div ClassName="hello">
      <nav className={`navbar fixed-top navbar-expand-lg navbar-light ${props.mode.backgroundColor === "#f8f9fa"? "bg-light" : "bg-dark"}`}>
  <div className="container-fluid  ">
    <a style={props.mode} className="navbar-brand" href="/">Aks-MOMOS</a>
    
    <div className="pos-f-t">
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a  className={`nav-link active ${props.mode.backgroundColor === "#f8f9fa"? "text-dark" : "text-light"}`} aria-current="page" href="/">HOME</a>
        </li>
        <li className="nav-item">
          <a  className={`nav-link active ${props.mode.backgroundColor === "#f8f9fa"? "text-dark" : "text-light"}`} href="/">ABOUT</a>
        </li>
        <li className="nav-item dropdown">
          <a  className={`nav-link dropdown-toggle ${props.mode.backgroundColor === "#f8f9fa"? "text-dark" : "text-light"}`} href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            SPECIAL_MOMOS
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style={props.mode}>
            <li><a style={props.mode} className="dropdown-item" href="/">Chilly Momo</a></li>
            <li><a style={props.mode} className="dropdown-item" href="/">Jhol Momo</a></li>
            <li><a style={props.mode} className="dropdown-item" href="/">Green Momo</a></li>
            <li><a style={props.mode} className="dropdown-item" href="/">Kothey Momo</a></li>
            <li><a style={props.mode} className="dropdown-item" href="/">Fried and Steam-fried Momo</a></li>
            <li><a style={props.mode} className="dropdown-item" href="/">Open Momo</a></li>
            <li><a style={props.mode} className="dropdown-item" href="/">Tandoori Momo</a></li>
            <li><a style={props.mode} className="dropdown-item" href="/">Buckwheat Phaphar Momo</a></li>
            <li><a style={props.mode} className="dropdown-item" href="/">Paneer/Khuwa/Cheese Momo</a></li>
            <li><a style={props.mode} className="dropdown-item" href="/">Fish Momo</a></li>
            <li><a style={props.mode} className="dropdown-item" href="/">Fried and Steam-fried Momo</a></li>
            <li><a style={props.mode} className="dropdown-item" href="/">Steamed Momo</a></li>
          </ul>
        </li>
        
      </ul>

    </div>
    </div>
  <li className=" nav navbar-nav">
    <div className="form-check form-switch">
      <input className="form-check-input" onClick={props.enableDarkMode} type="checkbox" id="flexSwitchCheckDefault"/>
       <label style={props.mode} className="form-check-label" hlmlfor="flexSwitchCheckDefault">Dark Mode</label>
    </div>
  </li>
  <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>
  </div>;
}
