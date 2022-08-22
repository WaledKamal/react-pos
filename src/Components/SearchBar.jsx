import Button from "./Button";
import { connect } from "react-redux";
import { useState } from "react";
const SearchBar = (props) => {
  const [keyword, setkeyword] = useState("");
  return (
    <div className="search-bar">
      <input
        className="searchbar"
        onChange={(e) => setkeyword(e.target.value)}
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
      ></input>
      <Button
        onPress={()=>props.search(keyword)}
        height={"45px"}
        width={"120px"}
        title="Search"
      />
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
