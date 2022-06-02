import React from "react";
import { RiMoneyPoundBoxLine } from "react-icons/ri";
import "./Header.css";
import { BiSearch } from "react-icons/bi";

function Header() {
  return (
    <div className="header">
      <div className="header__icon">
        <RiMoneyPoundBoxLine />
        <img
          src="https://user-images.githubusercontent.com/94323045/170417711-03fa3ac9-ee41-450b-9a91-a14af811952a.jpg"
          alt=""
        ></img>
      </div>
      <div className="header__center">
        <input type="text" />
        <BiSearch />
      </div>
    </div>
  );
}

export default Header;
