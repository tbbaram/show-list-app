import React from "react";
import ShowCard from "./ShowCard";


function ShowsListContainer({ showList, handleRemoveShow }) {
        
        return (
        <div>
            {showList.map((show, id) => {
                return <ul key={id}>
                <ShowCard 
                show={show} 
                key={show.id}
                />
                <button onClick={() => handleRemoveShow(show.id)}>Remove Show</button>
                </ul>
            })}
            
        </div>
        )
    }

export default ShowsListContainer;