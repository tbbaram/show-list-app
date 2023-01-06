import React, { useState } from "react";

function NewShowControlledForm({ handleAddShow }) {
    const [date, setDate] = useState("")
    const [venue, setVenue]= useState("")
    const [cityAndState, setCityAndState] = useState("")

    function changeDate(e) {
        setDate(e.target.value)
    }

    function changeVenue(e) {
        setVenue(e.target.value)
    }

    function changeCityAndState(e) {
        setCityAndState(e.target.value)
    }

 
    function handleSubmit(e) {
        e.preventDefault()
        setDate("")
        setVenue("")
        setCityAndState("")

        const newShow = {
            date: date,
            venue: venue,
            cityAndState: cityAndState
        }

        fetch("http://localhost:3000/shows", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(newShow)
        })
        .then(r => r.json())
        .then(newShow => handleAddShow(newShow))
        }

        //styles for inputs

        const inputStyles = {
            position: "absolute",
            bottom: "500px",
            left: "0",
            right: "0",
            margin: "auto",
            height: "30px",
            width: "20%",
            padding: "40px"
        }
        
        return (
        <div className="wrapper">
            <form style={inputStyles} onSubmit={handleSubmit}>
                <input
                name="date"
                type="text"
                placeholder="date"
                onChange={changeDate}
                value={date}>
                </input>
                <input
                name="venue"
                type="text"
                placeholder="venue"
                onChange={changeVenue}
                value={venue}>     
                </input>
                <input 
                name="cityAndState"
                type="text"
                placeholder="city and state"
                onChange={changeCityAndState}
                value={cityAndState}>
                </input>

                <input type="submit" value="Add Show" />
            </form>

        </div>
    )

}

export default NewShowControlledForm