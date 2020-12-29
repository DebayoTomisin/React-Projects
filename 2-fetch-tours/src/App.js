import React, { useState, useEffect } from "react"
import Loading from "./component/Loading"
import Tours from './component/Tours'

const url = 'https://course-api.com/react-tours-project'

function App() {

  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTours = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  const fetchTours = async () => {
      
    setLoading(true)

    try {
      const response = await fetch(url)
      const tours = await response.json()
      setTours(tours)
    } 

    catch (error) {
      console.log('error occurred')
    }
  }

  
  useEffect(() => {
    setLoading(false)
    fetchTours()
  }, [])

  const getTours = loading ? <Tours tours={tours} removeTours={removeTours}/> : <Loading />
  const noTours =
  <div>
    <h2>No Tours left</h2>
    <button onClick={fetchTours} className="btn" >refresh</button>
  </div>



  return (
    <main>
      {tours.length === 0 ? noTours : getTours }
    </main>
  );
}

export default App;
