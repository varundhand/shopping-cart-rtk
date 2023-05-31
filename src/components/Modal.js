import React from "react";
import { useDispatch } from "react-redux";
import { ClearCart } from "../features/cart/cartSlice";
import { setModal } from "../features/modal/modalSlice";

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>remove all items from your shopping cart?</h4>
        <div className="btn-container">
          <button
            className="btn confirm-btn"
            onClick={() => {
              dispatch(ClearCart());
              dispatch(setModal(false));
            }}
          >
            confirm
          </button>
          <button
            className="btn clear-btn"
            onClick={() => dispatch(setModal(false))}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
