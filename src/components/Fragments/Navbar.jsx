import Links from "../Element/Link/Links";

function Navbar() {
    const links = [
        {href:"#", title:"Colors",},
        {href:"#", title:"Typography",},
        {href:"#", title:"Spaces",},
        {href:"#", title:"Buttons",},
        {href:"#", title:"Inputs",},
        {href:"#", title:"Grid",},
     
    ]
    return(
        <nav id="navbar">
            <div id="navbar-master" className="w-60 h-full bg-[#FAFBFD] flex  flex-col items-center fixed top-0">
                <div id="logo" className="mt-12 mb-32">
                    <h1 className="font-poppins text-sm font-semibold text-[#090F31]"><span className="text-[#F7542E]">Dev</span>challenges.io</h1>
                </div>
                <div id="links" className="">
                    <Links links={links}/>
                </div>    
            </div>
        </nav>
    )
}

export default Navbar;