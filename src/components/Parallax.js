import "./Parallax.css";
import React from 'react';

export default function Parallax(props) {

    
  return  <div className="parallax"  style={props.mode}>
       <section className="meal-parallax" id="meal">
      <h1>HAPPY COUSTMER</h1><br/>
      <h4>Excepteur sint occaecat cupidatat non proident, <br/> sunt in culpa qui officia deserunt mollit anim id est laborum.Excepteur sint occaecat cupidatat non proident, <br/> sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
    </section>
  </div>;
}
