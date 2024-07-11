import React from "react";
import { Link } from 'react-router-dom'
export default function ScrollOnClick({ to, children, ...props }) {
    const handleClick = () => {
        window.scrollTo(0, 0);
    }

    return (
        <Link to={to} onClick={handleClick} {...props}>
            {children}
        </Link>
    )   
}