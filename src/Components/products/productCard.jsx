import { useState } from "react";

const Product = (props) => {
   return (
    <>
      <button className="product" onClick={() =>props.onPress()}>
        <img src={props.data.proudctImage} alt="" srcSet=""></img>
        <div className="title">
          {props.data.title.length > 14
            ? props.data.title.substring(0, 12) + "...."
            : props.data.title}{" "}
          {props.data.size ? <span> {props.data.size} ml </span> : ""}
        </div>
        <div className="price">$ {props.data.price}</div>
      </button>
    </>
  );
};

export default Product;
