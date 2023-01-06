import React from "react";

function ShowCard({ show }) {

    return (
        <div className="show">
            <h3>{show.date}
            <br></br>
            {show.venue}
            <br></br>
            {show.cityAndState}</h3>
        </div>
    )

}

export default ShowCard