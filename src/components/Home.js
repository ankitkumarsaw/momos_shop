import React from 'react';
import "./Home.css";
import display from"./img/display.jpg";
import leaf from"./img/leaf.png";
import message from"./img/message.png";
import rocket from"./img/rocket.png";
import greenMomos from"./img/greenMomos.jpg";
import tandoriMomos from "./img/tandoriMomos.jpg";
import chillyMomos from "./img/chillyMomos.jpg"

export default function Home() {
  return <div id="main">
    <section className="home">
      <div>
        <div className="home-div"></div>
        <div className="home-img"><img src={display} alt=""/></div>
      </div>
      <div className="home-detail">
        <h1>We Love <br/>Delicious MOMOS!</h1>
        <p>lorem ipsum dolor sit amet, consectetur adip ipsum dolor sit amet, consectetur adipipsum dolor sit amet, consectetur adip
        </p> 
        <button type="button">Explore Menu</button>
        <div>
          <li>
          <img src={leaf} alt=""/>
          <p>Fresh Food</p>
          </li>
          <li>
          <img src={rocket} alt=""/>  
          <p>Fast Delivery</p>
          </li>
          <li>
          <img src={message} alt=""/>  
          <p>24/7 Support</p>
          </li>

      </div>
      </div>
     
    </section>
    <div className="sph">
    <h1>SPECIAL DISH</h1>
    </div>
    <section className="specialDish">
      <div className="specialDish-detail">
        <h2>Green Momos</h2>
        <p>lorem ipsum dolor sit amet, consectetur adip ipsum dolor sit amet, consectetur adipipsum dolor sit amet, consectetur adip
        </p> 
        <button type="button">Order Now</button>
      </div>
      <div>
        <div className="specialDish-img"><img src={greenMomos} alt=""/></div>
      </div>
     
    </section>
    <section className="specialDish2">
    <div>
        <div className="specialDish-img"><img src={tandoriMomos} alt=""/></div>
      </div>
      <div className="specialDish-detail">
        <h2>Tandori Momos</h2>
        <p>lorem ipsum dolor sit amet, consectetur adip ipsum dolor sit amet, consectetur adipipsum dolor sit amet, consectetur adip
        </p> 
        <button type="button">Order Now</button>
      </div>
    </section>
    <section className="specialDish3">
      <div className="specialDish-detail">
        <h2>Chilly Momos</h2>
        <p>lorem ipsum dolor sit amet, consectetur adip ipsum dolor sit amet, consectetur adipipsum dolor sit amet, consectetur adip
        </p> 
        <button type="button">Order Now</button>
      </div>
      <div>
        <div className="specialDish-img"><img src={chillyMomos} alt=""/></div>
      </div>
    </section>

  </div>;
}
