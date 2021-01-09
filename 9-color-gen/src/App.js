import React, { useState } from 'react'

import Values from 'values.js'
import SingleColor from './SingleColor'


function App() {
  
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    
    try {
      let colors = new Values(color).all(10)
      setColor(colors)
      
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }

  return (
    <>
      <section className="container"></section>
      <section className="colors"></section>
    </>
  );
}

export default App;
