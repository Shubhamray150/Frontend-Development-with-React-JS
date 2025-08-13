import React, { useContext } from "react";
import { Table, Image, Button, Form } from "react-bootstrap";
import cartContext from "../../../Store/cartContext";

const Cart = () => {
  const cartCtx = useContext(cartContext);
  const total = cartCtx.cartItem.reduce((sum, item) => {
    return (sum += item.price * item.quantity);
  }, 0);
  console.log("cart", cartCtx);
  
  return (
    <div className="p-4">
      <h2 className="text-center mb-4" style={{ fontFamily: "fantasy" }}>
        Cart
      </h2>
      <Table bordered className="text-center align-middle">
        <thead>
          <tr>
            <th>ITEM</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
          </tr>
        </thead>
        <tbody>
          {cartCtx.cartItem.map((item) => {
            return (
              <tr key={item.id}>
                <td>
                  <div className="d-flex align-item-center gap-2 justify-content-center">
                    <Image src={item.imageUrl} width={50} thumbnail />
                    <span>{item.title}</span>
                  </div>
                </td>
                <td>{item.price}</td>
                <td>
                  <div className="d-flex justify-content-center gap-2 align-items-center">
                    <span>{item.quantity}</span>
                    <Button variant="danger" size="sm">
                      REMOVE
                    </Button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div className="d-flex justify-content-end my-3 pe-3">
        <h5>
          <strong>Total</strong> ₹{total.toFixed(2)}
        </h5>
      </div>
      <div className="text-center mt-4">
        <Button variant="info" size="lg" className="text-white fw-bold">
          PURCHASE
        </Button>
      </div>
    </div>
  );
};

export default Cart;
