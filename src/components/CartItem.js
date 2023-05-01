import React from "react";
import { ReactComponent as ChevronUp } from "../svgs/chevron-top-icon.svg";
import { ReactComponent as ChevronDown } from "../svgs/chevron-down-icon.svg";
import { useDispatch } from "react-redux";
import { removeItem, increase, decrease } from "../features/cart/cartSlice";

const CartItem = ({ id, img, title, price, amount }) => {
  // since we used spread operator, unless we would have to do nested destructuring
  const dispatch = useDispatch();

  const handleDecrease = () => {
    if (amount === 1) {
      dispatch(removeItem(id));
      return;
    }
    dispatch(decrease(id));
  };

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>
          remove
        </button>
      </div>
      <div>
        <button className="amount-btn" onClick={() => dispatch(increase(id))}>
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn" onClick={handleDecrease}>
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
