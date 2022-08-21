import { useState, useEffect } from "react";
import { connect } from "react-redux";
import Product from "./productCard";
import ProductsList from "./../../data/products.json";
import NewOrder from "../orders/NewOrder";

const Products = (props) => {
  const [productsList, setproductsList] = useState([]);
  const [newOrder, setnewOrder] = useState(false);

  const filterbyCategory = () => {
    if (props.activeCategory == "All") {
      setproductsList(ProductsList);
    } else {
      setproductsList(
        ProductsList.filter((l) => l.category == props.activeCategory)
      );
    }
  };

  const filterbyKeyword = () => {
    if (props.keyword == "") {
      setproductsList(ProductsList);
    } else {
      setproductsList(
        ProductsList.filter((l) =>
          l.title?.toLowerCase().includes(props.keyword?.toLowerCase())
        )
      );
    }
  };

  useEffect(() => {
    filterbyCategory();
  }, [props.activeCategory]);

  useEffect(() => {
    filterbyKeyword();
  }, [props.keyword]);

  return (
    <div className="products">
      {productsList.map((l, i) => (
        <Product onPress={()=> setnewOrder(true)} key={i} data={l}></Product>
      ))}
      {productsList.length < 1 ? (
        <div className="alert-empty">
          Not <span style={{ color: "red" }}> {props.activeCategory}</span>{" "}
          avalabile!
        </div>
      ) : (
        ""
      )}
      {newOrder ? <NewOrder onClose={()=> setnewOrder(false)}></NewOrder> : ""}
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
