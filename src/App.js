import "./App.css";
import Filter from "./Components/FilterProducts";
import Products from "./Components/products/products";
import SearchBar from "./Components/SearchBar";
import Cart from "./Components/orders/Cart";
import { connect } from "react-redux";
function App(props) {
  return (
    <div className="App">
      <div className="pos-1">
        <SearchBar
          placeholder={"Search all product here..."}
          height={"45px"}
          width={"500px"}
        ></SearchBar>
        <Filter></Filter>
        <Products></Products>
      </div>
      <Cart></Cart>
    </div>
  );
}

export default App;
