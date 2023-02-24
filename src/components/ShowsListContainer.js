import React from "react";
import ShowCard from "./ShowCard";

    function ShowsListContainer({ showList, setShowList, handleRemoveShow }) {

    let sortDates = [...showList].sort((a, b) => {
        return new Date(a.date) - new Date(b.date)
        })

    // styling for buttons

    const buttonStyle = {
        borderRadius: "12px",
        position: "relative",
        left: "115px",
        bottom: "60px",
        fontSize: "11px",
    }

    const sortButtonStyle = {
        backgroundColor: "black",
        color: "white",
        borderRadius: "12px"
    }
        
            return (
            <div>
                <button onClick={() => setShowList(sortDates)} style={sortButtonStyle}>Sort By Date</button>
                {showList.map((show) => {
                    return (
                        <div key={show.id}>
                        <ShowCard 
                        show={show} 
                        key={show.id}
                        />
                    <button style={buttonStyle} onClick={() => handleRemoveShow(show.id)}>Remove Show</button>
                    </div>
                )
            })}
            </div>
        )
    }

export default ShowsListContainer;