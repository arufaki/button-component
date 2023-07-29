import cn from "./className";

function labelStyle(title) {
    const base = `font-ubuntu text-xs font-normal mb-3 ${title == "&:hover, &:focus" ? "text-[#828282]" : false}`
    
    return cn(base, title);
}

export default labelStyle;