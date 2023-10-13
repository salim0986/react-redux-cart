import React from "react";
import logo from "../assets/icons8-shopping-cart-64.png";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <header>
      <nav>
        <div className="logoContainer">
          <img src={logo} alt="logo" />
          <p>Cart App</p>
        </div>
        <div className="linkContainer">
          <Link to="/">Home</Link>
          <Link to="/cart">
            <AiOutlineShoppingCart size={"2.5rem"} />
            <span>{cartItems.length}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
