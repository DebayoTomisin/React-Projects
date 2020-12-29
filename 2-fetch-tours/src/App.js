import React, { useState, useEffect } from "react"
import Loading from "./component/Loading"
import Tour from './component/Tour'

const url = 'https://course-api.com/react-tours-project'

function App() {

  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  useEffect(() => {
    const fetchTours = async () => {
      
      setLoading(true)

      try {
        const response = await fetch(url)
        const tours = await response.json()
        setTours(tours)
        console.log(tours)
      } 
      catch (error) {
        console.log(error)
      }
    }

    setLoading(false)
    fetchTours()

  }, [])

  return (
    <main>
      {loading ? <Loading/> : <Tour tours={tours}/>}
    </main>
  );
}

export default App;
