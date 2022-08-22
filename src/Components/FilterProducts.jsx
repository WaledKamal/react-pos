import { useState } from "react";
import { connect } from "react-redux";

const Filter = (props) => {
  const [activeCategory, setactiveCategory] = useState("All");
  const [filterButtons, setfilterButtons] = useState([
   
    {
      category: "Hot Coffee",
      icon: "coffee",
    },
    {
      category: "Ice Coffee",
      icon: "coffee-togo",
    },

    {
      category: "Ice Cream",
      icon: "popsicle",
    },
    {
      category: "Sandwiches",
      icon: "baguette",
    },
  ]);

  return (
    <div className="filter">
      {filterButtons.map((l, i) => (
        <button
          onClick={() => {
            setactiveCategory(l.category);
            props.modify(l.category);
          }}
          key={i}
          className={`filter-button ${
            activeCategory === l.category ? "active-filter" : ""
          }`}
          type="button"
        >
          <div className="area_filter">
            <box-icon className="icon-filter" name={l.icon}></box-icon>
          </div>
          <span>{l.category}</span>
        </button>
      ))}
      </div>
  );
};

const action = {
  type: "modify",
};

// read global state as props
const mapStateToProps = (state) => {
  return {
    activeCategory: state.activeCategory,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    modify: (data) => dispatch({ type: action.type, payload: data }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
