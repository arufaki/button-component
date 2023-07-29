import Button from "../Element/Button";
import buttonConfig from "../../utils/buttonConfig";

function ButtonsComponent() {
  const columnGaps = [
    "177px",
    "70px",
    "87px",
    "unset",
    "127px",
    "80px",
    "80px",
    "40px",
    "112px",
];

  return (
    <section id="button-component" className="px-11 ml-60">
      <h1 className="text-2xl font-poppins font-medium text-vampireGrey mt-14">
        Buttons
      </h1>
    { buttonConfig.map(({id, buttons}, index) => (
      <div className="flex flex-row last:items-end my-8" key={id} style={{columnGap: columnGaps[index]}}>
        { buttons.map(({id, title, text, color, defStyle, size, disable, startIcon, endIcon}) => (
          <Button
          key={id}
          id={id}
          title={title}
          text={text}
          color={color}
          defStyle={defStyle}
          size={size}
          disable={disable}
          startIcon={startIcon}
          endIcon={endIcon}
          />
        ))}
      </div>
    ))}
    </section>
  );
}

export default ButtonsComponent;
