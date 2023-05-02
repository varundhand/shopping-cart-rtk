import React from "react";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../features/modal/modalSlice";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((state) => state.cart); // destructured all of them at one place
  console.log(total, amount);

  const handleClear = () => {
    dispatch(setModal(true));
    // dispatch(ClearCart())
  };

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your Bag</h2>
          <h4 className="empty-cart">is currently empty.</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>Your Bag</h2>
      </header>
      <div className="">
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${amount.toFixed(2)}</span>{" "}
            {/* toFixed(number) keeps the amount till two decimal places like the 'round' function in python */}
          </h4>
        </div>
        <button className="btn clear-tbn" onClick={handleClear}>
          Clear Cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
