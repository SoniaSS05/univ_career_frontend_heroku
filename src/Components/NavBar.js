import React from 'react';
import { NavLink } from "react-router-dom";
import "./Home.css";


function NavBar() {
    return (
    <div >    
        <div>
            <div className="navbar">
                <div >
                    <h1 className="texttitp">Universities of United States</h1>
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
                    <NavLink  to="/CareerContainer">
                        Careers
                    </NavLink>
                </div>
                <div className="navopt">
                    <NavLink  to="/ReviewContainer">
                        Reviews
                    </NavLink>
                </div>
            </div>
        </div>  
  
    </div>
  
    )
}
export default NavBar;