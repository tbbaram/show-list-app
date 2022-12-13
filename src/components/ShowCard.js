import React from "react";

function ShowCard({ show }) {

    return (
        <div className="show">
            <br></br>{show.date} 
            <br></br>{show.venue}
            <br></br>{show.cityAndState}
        </div>
    )

}

export default ShowCard