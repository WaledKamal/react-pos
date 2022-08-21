import Strings from "./Strings";

const Button = (props) => {
  return (
    <button
      className="button"
      type="button"
      style={{
        backgroundColor: Strings.main_color,
        width: props.width,
        height: props.height,
        border: 'none',
        color:"white",
        cursor:'pointer'
      }}
      onClick={props.onPress}
    >
      {props.title}
    </button>
  );
};

export default Button;
