function Link({href, title, ...props}) {
    return(
        <a href={href} {...props}>{title}</a>
    )
}


export default Link;