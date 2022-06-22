import React from "react";
import { RiMoneyPoundBoxLine } from "react-icons/ri";
import "./Header.css";
import { BiSearch } from "react-icons/bi";
import { MdOutlineLanguage } from "react-icons/md";
import { FiChevronDown } from "react-icons/fi";
import Avatar from "../avatar/Avatar";

function Header() {
  return (
    <div className="header">
      <div className="header__icon">
        <RiMoneyPoundBoxLine />
        <p></p>
        <img
          className="logo"
          src="https://user-images.githubusercontent.com/94323045/171739434-563a5e59-7dea-4b14-baa4-abeb049ccc29.jpg"
          alt=""
        ></img>
      </div>
      <div className="header__center">
        <input type="text" />
        <BiSearch />
      </div>
      <div className="header__right">
        <p> Become a Host</p>
        <MdOutlineLanguage />
        <FiChevronDown />
        <Avatar src="" alt="" />
      </div>
    </div>
  );
}

export default Header;
