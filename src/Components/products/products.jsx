import { useState, useEffect } from "react";
import { connect } from "react-redux";
import Product from "./productCard";
import ProductsList from "./../../data/products.json";
import NewOrder from "../orders/NewOrder";

const Products = (props) => {
  const [newOrder, setnewOrder] = useState(false);
  const [currentOrder, setcurrentOrder] = useState({});
  return (
    <div className="products">
      {ProductsList.filter(
        (l) =>
          l.category == props.activeCategory ||
          l.title?.toLowerCase().includes(props.keyword?.toLowerCase())
      ).map((l, i) => (
        <Product
          onPress={() => {
            setnewOrder(true);
            setcurrentOrder(l);
          }}
          key={i}
          data={l}
        ></Product>
      ))}
      {ProductsList.filter(
        (l) =>
          l.category == props.activeCategory ||
          l.title?.toLowerCase().includes(props.keyword?.toLowerCase())
      ).length < 1 ? (
        <div className="alert-empty">
          Not{" "}
          <span style={{ color: "red" }}>
            {" "}
            {props.activeCategory || props.keyword}
          </span>{" "}
          avalabile!
        </div>
      ) : (
        ""
      )}
      {newOrder ? (
        <NewOrder
          currentOrder={currentOrder}
          onClose={() => setnewOrder(false)}
        ></NewOrder>
      ) : (
        ""
      )}
    </div>
  );
};

// read global state as props
const mapStateToProps = (state) => {
  return {
    activeCategory: state.activeCategory,
    keyword: state.filterKeyword,
  };
};

export default connect(mapStateToProps)(Products);
