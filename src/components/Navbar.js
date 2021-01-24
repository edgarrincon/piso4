import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { IconContext } from "react-icons";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const showSidebarB = () => {
    setSidebar(!sidebar);

    setTimeout(() => {
      setSidebar(sidebar);
    }, 2000);
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#000" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <Link to="/" className="menu-bars">
            <button onClick={showSidebarB}>4</button>
          </Link>
          <Link to="/piso3" className="menu-bars">
            <button onClick={showSidebarB}>3</button>
          </Link>
          <Link to="/piso2" className="menu-bars">
            <button onClick={showSidebarB}>2</button>
          </Link>
          <Link to="/piso1" className="menu-bars">
            <button onClick={showSidebarB}>1</button>
          </Link>
          <Link to="/pb" className="menu-bars">
            <button onClick={showSidebarB}>PB</button>
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <div className={sidebar ? "nav-menu-left active" : "nav-menu-left"}>
            <div>
              <h2>Pis</h2>
              <h4 className="sub-title">AGE</h4>
            </div>
          </div>
          <div>
            <h2 className="cuatro">o4</h2>
            <h4>NCY</h4>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
