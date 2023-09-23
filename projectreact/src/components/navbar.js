import "./navbar.css";
import React from "react";
import { MenuItems } from "./Menuitems";

function Navbar() {
  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">TRAVL</h1>
      <ul className="nav-menu">
        {MenuItems.map((item, index) => {
          return (
            <li>
              {
                <a href="/">
                  <i className={item.icon}></i>
                  {item.title}
                </a>
              }
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
