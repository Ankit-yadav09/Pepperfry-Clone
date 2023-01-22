import React from 'react'

function CartItemCard({ item }) {
    console.log(item)
  return (
          <div className="card" key={item.id}>
              <img className="item-image" src={item.img[0]} alt="" />
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
                      <p className="line-through">
                      ₹ {item.actual_price.toLocaleString("en-IN")}
                      </p>
                      &nbsp; &nbsp; &nbsp;
                      <p className="jspb1">
                           Saved ₹
                          {(
                          item.total_savings
                          ).toLocaleString("en-IN")}
                          
                      </p>
                  </div>
                  
              </div>
          </div>
  )
}

export default CartItemCard