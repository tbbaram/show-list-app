import React from "react";
import { Link } from "react-router-dom" 

function ShowCard({ show }) {

    return (
        <div className="show">
            <h3>{show.date}
            <br></br>
            <Link to={`/shows/${show.id}`}>{show.venue}</Link>
            <br></br>
            {show.cityAndState}</h3>
        </div>
    )
}

export default ShowCard