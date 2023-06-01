"use client";

import React, { useRef, useState } from "react";
import "../styles/navbar.css";
import Link from "next/link";
const Header = () => {
  const [active, setActive] = useState({
    about: false,
    contact: false,
    home: true,
    movie: false,
  });

  const ref = useRef();

  const changeActiveHandeler = (value) => {
    const obj = {};
    Object.keys(active).map((item, index) => {
      if (item === value) {
        obj[value] = true;
      } else {
        obj[item] = false;
      }
    });
    setActive(obj);
    console.log(value, active);
    // if (value === "contact") {
    //   setActive({ contact: true, about: false, movie: false, home: false });
    // } else if (value === "about") {
    //   setActive({ contact: false, about: true, movie: false, home: false });
    // } else if (value === "home") {
    //   setActive({ contact: false, about: false, movie: false, home: true });
    // } else if (value === "movie") {
    //   setActive({ contact: false, about: false, movie: true, home: false });
    // } else {
    //   setActive({ about: false, contact: false, movie: false, home: false });
    // }
  };

  const showNavbar = (e) => {
    console.log("show navbar", e);

    ref.current.classList.add("showsidebar");
  };

  const hideNavbar = () => {
    ref.current.classList.remove("showsidebar");
  };
  return (
    <>
      <header className="navbar">
        <div className="homeLink">
          {/* <Link onClick={changeActiveHandeler} className="link" href={"/"}>
          Home
        </Link> */}
          <button onClick={showNavbar} className=" sidebarButton">
            Show Sidebar
          </button>
        </div>
        <div className="link">
          <Link
            onClick={() => {
              changeActiveHandeler("home");
            }}
            className={`link ${active.home ? "active" : null}`}
            href={"/"}
          >
            Home
          </Link>
          <Link
            onClick={() => {
              changeActiveHandeler("about");
            }}
            className={`link ${active.about ? "active" : null}`}
            href={"/about"}
          >
            About
          </Link>
          <Link
            onClick={() => {
              changeActiveHandeler("movie");
            }}
            className={`link ${active.movie ? "active" : null}`}
            href={"/movie"}
          >
            Movie
          </Link>
          <Link
            onClick={() => {
              changeActiveHandeler("contact");
            }}
            className={`link ${active.contact ? "active" : null}`}
            href={"/contact"}
          >
            Contact
          </Link>
        </div>
      </header>
      <div ref={ref} className="sidebar">
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>MOVIE</li>
          <li>CONTACT</li>
          <li>
            <button onClick={hideNavbar}>close</button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
