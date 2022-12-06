import React, { useState, useEffect } from "react";
import { Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import NewShowControlledForm from "./components/NewShowControlledForm";
import ShowsListContainer from "./components/ShowsListContainer";



// create function w useEffect to fecth all data(shows)

function App() {
  const [showList, setShowList] = useState([])

  function fetchAllShows() {
    fetch("http://localhost:3000/shows")
      .then(resp => resp.json())
      .then(data => setShowList(data))
  }

    const handleAddShow = (newShow) => {
      setShowList([...showList, newShow])
    }
    
    useEffect(() => {
    fetchAllShows()
  }, []
  )

  const handleRemoveShow = (id) => {
    fetch(`http://localhost:3000/shows/${id}`, {
      method: "DELETE"
    }).then(resp => resp.json())
      fetchAllShows()
    }
 


  return (
    <div>
      <Navbar />
      <Header />
        <Routes>
            <Route path="/shows" element={<ShowsListContainer showList={showList} handleRemoveShow={handleRemoveShow} />} />
            <Route path="/shows/new" element={<NewShowControlledForm handleAddShow={handleAddShow} />} />
        </Routes>
    </div>
  )
}

export default App