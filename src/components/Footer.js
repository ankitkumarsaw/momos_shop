import "./Footer.css";
import React from 'react';
import facebook from "./img/facebook.png";
import instagram from "./img/instagram.png";
import twitter from "./img/twitter.png";

export default function Footer(props) {
  return <div className="footer"  style={props.mode}>
      <div className="ownCmpy">
          <h1>Aks-MOMOS</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et obcaecati quisquam id sit omnis explicabo voluptate aut placeat, soluta, nisi ea magni facere, itaque incidunt modi? Magni, et voluptatum dolorem.</p>
      </div>
      <div className="nLetter">
          <h2>Newsletter</h2>
          <p>Lorem ipsum dolor sit amet,<br/> consectetur adipisicing elit. Et obcaecati <br/> adipisicing elit. Et obcaecati quisquam id sit omnis explicabo voluptate aut</p>
          <input type="email"  placeholder="Email"/><br/>
          <input type="submit"  value="Submit"/>
      </div>
      <div className="sMedia">
          <img src={facebook} alt="" className = {`${props.mode.backgroundColor === "#f8f9fa" ? "invertF" : "invertS"}`}/>
          <img src={instagram} alt="" className = {`${props.mode.backgroundColor === "#f8f9fa" ? "invertF" : "invertS"}`}/>
          <img src={twitter} alt="" className = {`${props.mode.backgroundColor === "#f8f9fa" ? "invertF" : "invertS"}`}/>
      </div>
      <div className="cRight">
          <p> <span>© Copyright</span> Agency and contributors 2022. ABN 53 001 228 799</p>
      </div>
  </div>;
}
