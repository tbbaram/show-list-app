import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <nav className="nav">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/shows">Shows</Link>
                    </li>
                    <li>    
                        <Link to="/shows/new">New Show</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar