import "./Contact.css"
import React from 'react';

export default function Contact(props) {
  return <div className="contactBackground">
   <section className="contact">
    <div style={props.mode}>
      <p>Resevation</p>
      <h2>Book Now</h2>
    <input type="text"  placeholder="Name" ></input>
     <input type="text"  placeholder="Email" ></input>
     <input type="text"  placeholder="Phone" ></input>
     <input type="number"  placeholder="Person" ></input>
     <textarea type="text" rows="4" cols="42"></textarea>
     <input type="submit" value="Send Meassage"/>
    </div>
   </section>

  </div>;
}

