import { Link } from "react-router-dom";
import { useState } from "react";
import './Calendar'
import './Calendar.css'



function Button() {


      return (
        <Link to='/calendar'>
          <button className="SignIn">Sign In</button>
        </Link>
      );
    
  }; 

    
  
  export default Button;