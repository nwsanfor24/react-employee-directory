import React from "react";

function Navbar() {
    return (
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
               <div>
                   <ul className="navbar-nav">
                       <li className="nav-item">
                           Employees by Date
                       </li>
                       <li className="nav-item">
                           Employees by Name
                       </li>
                   </ul>
               </div>
           </nav>
    );
}

export default Navbar;