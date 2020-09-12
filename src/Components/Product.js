import { CheckOutlined } from "@material-ui/icons";
import React from "react";
import "./Product.css";
import Total from "./Total";

function Product({ id, title, image, price, rating }) {
  const Checkout = () => {};
  return (
    <div className="product">
      <div className="Productinfo">
        <p className="Producttitle">{title}</p>
        <p className="productprice">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="productimage">
          <img src={image} alt="Never get old" />
        </div>
        <div className="stars">
          {Array(rating)
            .fill()
            .map((_) => (
              <p className="buttonst">{"\u272F"}</p>
            ))}
        </div>
        <div>
          <button onClick={Checkout()}>Add to basket</button>
        </div>
      </div>
    </div>
  );
}
export default Product;
