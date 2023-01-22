import React from "react";

function CartItemCard({ item }) {
  console.log({ item });
  return (
    <div
      className="card"
      style={{ height: "80px", rowgap: "10px", display: "flex" }}
    >
      <img
        className="item-image"
        style={{ height: "100%" }}
        src={item.img[0]}
        alt=""
      />
      <div className="cart-right">
        <div className="carthead">
          <h2>{item.desc}</h2>
          <div
            className="delete"
            //   onClick={() => deleteitem(item.id)}
          >
            {/* <img src={deletebox} alt="" /> */}
          </div>
        </div>

        <div className="amounta" style={{ display: "flex" }}>
          ₹ {item.price}
        </div>
      </div>
    </div>
  );
}

export default CartItemCard;
