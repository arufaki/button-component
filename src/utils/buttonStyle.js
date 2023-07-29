import cn from "./className";

function styleComponent({ color, defStyle, size }) {
  const base = "font-medium font-noto text-sm py-2 px-4 rounded-md tracking-wide";

  const variants = {
    color: {
      primary: "bg-platinum",
      primaryHover: "bg-platinum hover:bg-aluminium duration-150",
      outline: "bg-white ",
      outlineHover: "hover:bg-royalBlue/10 duration-150 ",
      disableShadow:"text-white bg-royalBlue",
      secondary: "bg-darkGrey text-white",
      danger: "bg-red-600 text-white",
      disableHover: "text-white bg-royalBlue hover:bg-[#0039CB] duration-150",
      secondaryHover: "text-white bg-darkGrey hover:bg-veryDark duration-150",
      dangerHover: "bg-red-600 text-white hover:bg-red-800 duration-150",
      

    },
    size: {
      sm: "px-3 py-1.5",
      lg: "px-[22px] py-[11px]",
    },
    defaultProps: {
      defaultPrimary: "text-shipGrey shadow-3xl",
      defaultOutline: "text-royalBlue border border-royalBlue",
      defaultText: "text-royalBlue",
      defaultDisabled: "text-[#9e9e9e]",
      defaultIcon:"text-white",
    },
  };
  return cn(base, variants.color[color], variants.size[size], variants.defaultProps[defStyle]);
}



export default styleComponent;
