import React from "react";
import {
  AiFillPhone,
  AiFillGithub,
  AiOutlineMail,
  AiFillLinkedin,
} from "react-icons/ai";

const Navbar = () => {
  return (
    //   TODO: Add react bootstrap stuff so that when you hover over email and phone it shows it
    <>
      <nav>
        <h1>NC Stock Tracker</h1>
        <ul>
          <li>
            <a className="dropInfo" data="(905)-802-4431" href="#">
              <AiFillPhone className="icon" />
            </a>
          </li>
          <li>
            <a className="dropInfo" data="ncantone@uwaterloo.ca" href="#">
              <AiOutlineMail className="icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <AiFillLinkedin className="icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <AiFillGithub className="icon" />
            </a>
          </li>
        </ul>
        <button className="news">
          <a
            id="news-info"
            href="https://ca.finance.yahoo.com"
            style={{ color: "black" }}
          >
            News
          </a>
        </button>
      </nav>
    </>
  );
};

export default Navbar;
