import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCartTotal } from "../redux/cartSlice";
import CartComp from "../components/cart/CartComp";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { carts, itemCount, totalAmount } = useSelector((state) => state.carts);

  console.log(carts, totalAmount, itemCount, "carts");

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  return (
    <div>
      {carts?.length > 0 ? (
        <div>
          {carts?.map((cart, i) => (
            <CartComp key={i} cart={cart} />
          ))}
        </div>
      ) : (
        <div> Your cart is Empty...</div>
      )}

      <div className="flex items-center justify-end text-2xl ">TOTAL AMOUNT:
        <span className="font-bold text-3xl ml-2">  {totalAmount}  TL</span></div>
    </div>
  );
};

export default Cart;
