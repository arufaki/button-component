import styleComponent from "../../../utils/buttonStyle";

function SingleButton({ text, color, startIcon, endIcon, defStyle,size, ...props }) {
  return (
    <button className={styleComponent({ color, defStyle, size })} {...props}>
      {startIcon && <span className="mr-2">{startIcon}</span>}
      {text ? text : "Default"}
      {endIcon && <span className="ml-2">{endIcon}</span>}
    </button>
  );
}

export default SingleButton;
