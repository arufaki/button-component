import labelStyle from "../../../utils/labelStyle";

function Label({ title, htmlFor }) {
  return <label htmlFor={htmlFor} className={labelStyle(title)}>{title}</label>;
}

export default Label;
