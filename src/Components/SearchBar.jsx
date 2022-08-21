import Button from "./Button";
import { connect } from "react-redux";
const SearchBar = (props) => {
  return (
    <div className="search-bar">
      <input
        className="searchbar"
        onChange={(e)=>props.search(e.target.value)}
        type={"text"}
        style={{
          backgroundColor: "white",
          width: props.width,
          height: props.height,
          border: "none",
          padding: 10,
          outline: "none",
        }}
        placeholder={props.placeholder}
        onClick={props.onPress}
      ></input>
      <Button height={"45px"} width={"120px"} title="Search" />
    </div>
  );
};

const actions = [
  {
    type: "search",
  },
];

const mapDispatchToProps = (dispatch) => {
  return {
    search: (data) => dispatch({ type: actions[0].type, payload: data }),
  };
};



export default connect(null, mapDispatchToProps)(SearchBar);
