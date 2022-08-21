const Intstate = {
  activeCategory: "All",
  filterKeyword: "",
};

const reducer = (state = Intstate, action) => {
  if (action.type === "modify") {
    return (state = { activeCategory: action.payload });
  }

  if (action.type === "search") {
    console.log(action.payload)
    return (state = {
      activeCategory: state.activeCategory,
      filterKeyword: action.payload,
    });
  }

  return state;
};

export default reducer;
