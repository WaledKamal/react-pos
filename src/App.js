import "./App.css";
import Filter from "./Components/FilterProducts";
import Products from "./Components/products/products";
import SearchBar from "./Components/SearchBar";
import { connect } from "react-redux";
function App(props) {

 
  return (

    <div className="App">
      <SearchBar
        placeholder={"Search all product here..."}
        height={"45px"}
        width={"500px"}
      ></SearchBar>
      <Filter></Filter>
      <Products></Products>
    </div>
  );
}

 
export default App;
