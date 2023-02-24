import React from "react";
import { useParams } from "react-router-dom";

function ShowDetails ({ showList }) {

    let { showId } = useParams()
    
    const showToShow = showList.filter(show => show.id == showId)[0]

    return (
    <div>
        <h1>{showToShow.date}</h1>
        <h1>{showToShow.venue}</h1>
        <h1>{showToShow.cityAndState}</h1>
    </div>    
    )
}

export default ShowDetails