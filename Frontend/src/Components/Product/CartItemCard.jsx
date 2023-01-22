import React from "react";

function CartItemCard({ item }) {
  return (
    <div className="card" style={{ height: "80px" }}>
      <img
        className="item-image"
        style={{ height: "80px" }}
        src={item.img[0]}
        alt=""
      />
      <div className="cart-right">
        <div className="carthead">
          <h2>{item.name}</h2>
          <div
            className="delete"
            //   onClick={() => deleteitem(item.id)}
          >
            {/* <img src={deletebox} alt="" /> */}
          </div>
        </div>
        <div className="by">by {item.madeBy}</div>
        <div className="amounta">
          ₹ {item.offer_price}
          &nbsp;&nbsp;&nbsp;
          <p className="line-through">₹ {}</p>
          &nbsp; &nbsp; &nbsp;
          <p className="jspb1">Saved ₹</p>
        </div>
      </div>
    </div>
  );
}

export default CartItemCard;
