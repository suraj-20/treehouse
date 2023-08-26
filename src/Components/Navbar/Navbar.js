import React, { useState } from "react";
import "./Navbar.css";
import { FiSearch } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const [active, setActive] = useState("navBar");

  const showNavbar = () => {
    setActive("navBar activeNavbar");
    console.log("Clicked");
  };

  const closeNavbar = () => {
    setActive("navBar");
  };

  return (
    <section className="navbarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo">
            <h1>treehouse</h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">
                <FiSearch className="icon" />
              </a>
            </li>

            <li className="navItem current">
              <a href="#" className="navLink">
                Home
              </a>
            </li>

            <li className="navItem navItem-freeTrial">
              <a href="#" className="navLink ">
                Free trail
              </a>
            </li>
          </ul>

          <div onClick={closeNavbar} className="closeNavbar">
            <GrClose className="navbarIcon" />
          </div>
        </div>
        <div onClick={showNavbar} className="toggleNavbar">
          <GiHamburgerMenu className="navbarIcon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
