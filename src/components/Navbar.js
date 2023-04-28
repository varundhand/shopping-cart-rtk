import React from "react";
import { ReactComponent as CartIcon } from "../svgs/shopping-cart-icon.svg";
import { useSelector } from "react-redux";

const Navbar = () => {
  const total = useSelector((store) => store.cart.total);
  const amount = useSelector((store) => store.cart.amount);

  return (
    <nav>
      <div className="nav-center">
        <h3>redux toolkit</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{total}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
