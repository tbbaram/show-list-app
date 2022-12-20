import React from "react";
import ShowCard from "./ShowCard";


function ShowsListContainer({ showList, handleRemoveShow }) {
        
        return (
        <div>
            {showList.map((show) => {
                return (
                <div key={show.id}>
                <ShowCard 
                show={show} 
                key={show.id}
                />
                <button onClick={() => handleRemoveShow(show.id)}>Remove Show</button>
                </div>
                )
            })}
        </div>
        )
    }

export default ShowsListContainer;