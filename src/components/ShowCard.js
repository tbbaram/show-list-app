import React from "react";

function ShowCard({ show }) {

    return (
        <div className="show">
            <ul key={show.id}>
                <br></br>{show.date} 
                <br></br>{show.venue}
                <br></br>{show.cityAndState}
            </ul>
        </div>
    )

}

export default ShowCard