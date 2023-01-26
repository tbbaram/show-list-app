import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NewShowControlledForm from "./components/NewShowControlledForm";
import ShowsListContainer from "./components/ShowsListContainer";
import ShowDetails from "./components/ShowDetails";

function App() {
  const [showList, setShowList] = useState([])

    const handleAddShow = (newShow) => {
    const newArr = [...showList, newShow]
      setShowList(newArr)
    }

    useEffect(() => {
      fetchAllShows();
      }, [])
    
  function fetchAllShows() {
    fetch("http://localhost:3000/shows")
      .then(resp => resp.json())
      .then(data => setShowList(data))
  }

const handleRemoveShow = (id) => {
  fetch(`http://localhost:3000/shows/${id}`, {
    method: "DELETE"
  }).then(res => fetchAllShows(res))
 }

  return (
    <div>
      <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shows" element={<ShowsListContainer showList={showList} handleRemoveShow={handleRemoveShow} />} />
            <Route path="/shows/new" element={<NewShowControlledForm handleAddShow={handleAddShow} />} />
            <Route path="/shows/:showId" element={<ShowDetails showList={showList} />} />
        </Routes>
        
    </div>
  )
}

export default App