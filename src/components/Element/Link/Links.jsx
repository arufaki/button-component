import Link from "./Link";

function Links({links}) {
    return (
        <ul>
            {links.map(({href, title}, index) => (
                <li key={index} className="font-noto text-sm text-[#9E9E9E] font-medium mb-6 hover:text-[#090F31] duration-100">
                    <Link href={href} title={title}/>
                </li>
            ))}
        </ul>
    );
}

export default Links;









