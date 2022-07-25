import React, { useEffect, useState } from "react";
import "./nav.css";

// netflix logo on navbar
const logo =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png";

// netflix avatar on navbar
const avatar =
  "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png";

function Nav() {
  const [show, handleShow] = useState(false);

  // navbar bg color will turn black when we scroll vertically
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });

    // cleanup function to prevent memory leak in our application, similar to componentWillUnmount() in class component
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img src={logo} alt='Netflix Logo' className='nav_logo' />
      <img src={avatar} alt='Netflix Avatar' className='nav_avatar' />
    </div>
  );
}

export default Nav;
