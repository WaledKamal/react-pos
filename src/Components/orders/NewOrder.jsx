import Barcode from 'react-barcode';

const NewOrder = (props) => {
  console.log(props.currentOrder);
  return (
    <div className="new-order">
      <div className="order-form">
        
        <img src={props.currentOrder.proudctImage} alt="" srcSet="" />
        <div className="title">
          {props.currentOrder.title}{" "}
          {props.currentOrder.size ? `${props.currentOrder.size} ml` : ""}
        </div>
        <div className="price">${props.currentOrder.price}</div>
        <div className="description">
          {props.currentOrder.description || "no description"}
        </div>
        <div className="size"></div>
        <div className="qty">Available :<span> {props.currentOrder.qty}</span></div>
         <div className="controls">
          <button
            className="close-btn"
            type="button"
            onClick={() => props.onClose()}
          >
            Close
          </button>
          <button
            className="add-btn"
            type="button"
            onClick={() => props.addtoCart()}
          >
            Add +
          </button>
        </div>
      </div>
    </div>
    
  );
};

export default NewOrder;
