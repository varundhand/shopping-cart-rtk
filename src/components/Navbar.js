import React from "react";
import { ReactComponent as CartIcon } from "../svgs/shopping-cart-icon.svg";
import { useSelector } from "react-redux";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <h3>redux toolkit</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">0</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;