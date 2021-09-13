import React from 'react';
import { NavLink } from "react-router-dom";
import "./Home.css";


function NavBar() {
    return (
    <div >    
        <div>
            <div className="navbar">
                <div className="logo">
                    <h1 className="texttit">Universities</h1>
                </div>  
                
                <div className="navopt">
                    <NavLink  to="/">Home</NavLink>
                </div>
                <div className="navopt">
                    <NavLink  to="/UniversityContainer">
                        Universities
                    </NavLink>
                </div>
                <div className="navopt">
                    <NavLink  to="/UniversityContainer">
                        Careers
                    </NavLink>
                </div>
            </div>
        </div>  
  
    </div>
  
    )
}
export default NavBar;