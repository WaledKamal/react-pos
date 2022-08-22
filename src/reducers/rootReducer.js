const Intstate = {
  activeCategory: "All",
  filterKeyword: "",
  currentOrder : ''
};

const reducer = (state = Intstate, action) => {
  if (action.type === "modify") {
    return (state = { activeCategory: action.payload || 'All' });
  }

  if (action.type === "search") {
    return (state = {
      activeCategory: '',
      filterKeyword: action.payload,
    });
  }

  if (action.type === "new-order") {
    return (state = {
      activeCategory: '',
      filterKeyword: action.payload,
    });
  }





  return state;
};

export default reducer;
