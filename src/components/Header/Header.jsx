import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
// import Scroll from "react-scroll";
// const ScrollLink = Scroll.ScrollLink;
import { Link } from "react-scroll";
const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="header">
      <img className="logo" src={Logo} alt="logo" />
      {menuOpen === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpen(true)}
        >
          <img
            src={Bars}
            alt="Bars"
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              to="home"
              spy={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              to="Programs"
              spy={true}
              smooth={true}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              to="reasons"
              spy={true}
              smooth={true}
            >
              Whu Us ?
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              to="Plans"
              spy={true}
              smooth={true}
            >

            Plans
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              to="Testemonials"
              spy={true}
              smooth={true}
            >
              Testemonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
