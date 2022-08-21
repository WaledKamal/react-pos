const NewOrder = (props) => {
  return (
    <div className="new-order">
      <div className="text">This Order Creator</div>
      <button type="button" onClick={() => props.onClose()}>
        Close
      </button>
    </div>
  );
};

export default NewOrder;
