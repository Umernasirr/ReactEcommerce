import React from "react";
import { MDBBtn } from "mdbreact";
import { ProductConsumer } from "../context";

const CartItem = ({ item }) => {
  return (
    <ProductConsumer>
      {(value) => (
        <tr className="text-center">
          <td className="mt-4">
            <img
              onClick={() => {
                value.openModal(item.id);
              }}
              alt={item.title}
              src={item.img}
              style={{ maxHeight: "50px" }}
              className="img img-fluid mh-50"
            />
          </td>
          <td className=" py-3" style={{ fontSize: "0.8em" }}>
            {item.title}{" "}
          </td>
          <td className="py-3">Rs. {item.price}</td>

          <td className="" width="25%">
            {/* <MDBBtn
              style={{
                padding: "0px 1px",
              }}
              onClick={() => {
                value.increment(item.id);
              }}
              size="xs"
              color="primary  "
            > */}
            <i
              onClick={() => {
                value.increment(item.id);
              }}
              className="fa-plus fas fa-xs text-primary border "
            />
            {item.count}
            {/* <MDBBtn
              style={{
                padding: "0px 1px",
              }}
              onClick={() => {
                value.decrement(item.id);
              }}
              size="sm"
              color="danger"
            > */}
            <i
              onClick={() => {
                value.decrement(item.id);
              }}
              className="fas fa-minus fa-xs text-primary border"
            />
            {/* </MDBBtn> */}
          </td>
          <td width="5%">
            {/* <MDBBtn
              style={{
                padding: "0px 2px",
              }}
              size="sm"
              onClick={() => {
                value.removeFromCart(item.id);
              }}
              color="primary"
            > */}
            <i
              onClick={() => {
                value.removeFromCart(item.id);
              }}
              className="fas fa-trash-alt text-danger "
            ></i>
            {/* </MDBBtn> */}
          </td>
          <td>Rs. {item.price * item.count}</td>
        </tr>
      )}
    </ProductConsumer>
  );
};

export default CartItem;
