import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="Header-js">
      <div className="Header">
        <Link to="/login">
          <img
            src="https://mediad.publicbroadcasting.net/p/krwg/files/styles/large/public/201912/Amazon-Logo_Feature.jpg"
            alt="logo"
          />
        </Link>
        <input type="text" className="headerSearch" />
        <SearchIcon className="headerSearchIcon" />
        <div className="Header__nav">
          <Link to="/login" className="HeaderLink">
            <div className="Header__option">
              <span className="Header__optionLineone">Hello sandy</span>
              <span className="Header__optionLinetwo">sign in </span>
            </div>
          </Link>
        </div>
        <div className="Header__nav">
          <Link to="/login" className="HeaderLink">
            <div className="Header__option">
              <span className="Header__optionLineone">Returns</span>
              <span className="Header__optionLinetwo">& Orders</span>
            </div>
          </Link>
        </div>
        <div className="Header__nav">
          <Link to="/login" className="HeaderLink">
            <div className="Header__option">
              <span className="Header__optionLineone">Your</span>
              <span className="Header__optionLinetwo">Prime</span>
            </div>
          </Link>
        </div>
        <div className="Header__nav">
          <Link to="/login" className="HeaderLink">
            <div className="Header__optionBasket">
              <ShoppingBasketIcon />
              <span className="Header__optionLinetwo  Header__optionBasketCount ">
                {basket.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
