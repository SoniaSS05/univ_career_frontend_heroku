import React from 'react';
import { NavLink } from "react-router-dom";


function NavBar() {
    console.log("ENTRE ACA");
    return (
    <div >    
      <div >
        <div className="navbar">
          <div className="logo">
            <h1 className="texttit">University</h1>
          </div>  
           
          <div className="navopt">
            <NavLink  to="/">Home</NavLink>
          </div>
          <div className="navopt">
            <NavLink  to="/UniversityContainer">
                University
            </NavLink>
          </div>
          </div>
        </div>
    </div>
  
    )
}
export default NavBar;