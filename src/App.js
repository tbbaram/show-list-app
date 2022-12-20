import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import NewShowControlledForm from "./components/NewShowControlledForm";
import ShowsListContainer from "./components/ShowsListContainer";

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
            <Route path="/" element={<Header />} />
            <Route path="/shows" element={<ShowsListContainer showList={showList} handleRemoveShow={handleRemoveShow} />} />
            <Route path="/shows/new" element={<NewShowControlledForm handleAddShow={handleAddShow} />} />
        </Routes>
    </div>
  )
}

export default App