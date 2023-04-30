import React from "react";
import { ReactComponent as ChevronUp } from "../svgs/chevron-top-icon.svg";
import { ReactComponent as ChevronDown } from "../svgs/chevron-down-icon.svg";

const CartItem = ({ id, img, title, price, amount }) => {
  // since we used spread operator, unless we would have to do nested destructuring
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn">remove</button>
      </div>
      <div>
        <button className="amount-btn">
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn">
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
