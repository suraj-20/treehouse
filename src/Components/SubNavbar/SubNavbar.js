import React from "react";
import "./SubNavbar.css";

const SubNavbar = () => {
  return (
    <section className="subNavSection">
      <div className="sticky-navbar">
        <ul className="subNavList">
          <li className="SubNavItem">
            <a href="#" className="nav-anchor">
              AI
            </a>
            <ul className="children">
              <li className="child-navItem">
                <a href="#" className="nav-anchor">
                  ChatGPT
                </a>
              </li>
            </ul>
          </li>
          <li className="SubNavItem">
            <a href="#" className="nav-anchor">
              Business Resources
            </a>
          </li>
          <li className="SubNavItem">
            <a href="#" className="nav-anchor">
              Career Advice
            </a>
          </li>
          <li className="SubNavItem">
            <a href="#" className="nav-anchor">
              Community
            </a>
          </li>
          <li className="SubNavItem">
            <a href="#" className="nav-anchor">
              Engineering People Podcast
            </a>
          </li>
          <li className="SubNavItem">
            <a href="#" className="nav-anchor">
              Learn
            </a>
          </li>
          <li className="SubNavItem">
            <a href="#" className="nav-anchor">
              Treehouse News
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SubNavbar;
