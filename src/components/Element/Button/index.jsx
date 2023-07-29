import SingleButton from "./Button";
import Label from "./Label";


function Button({ id, title, text, color, defStyle, size, disable, startIcon, endIcon }) {
  return (
    <div className="flex flex-col items-start">
      <Label htmlFor={id} title={title} />
      <SingleButton id={id} text={text} color={color} defStyle={defStyle} disable={disable} startIcon={startIcon} endIcon={endIcon} size={size}/>
    </div>
  );
}

export default Button;
