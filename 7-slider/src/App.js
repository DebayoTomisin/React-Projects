import React, { useState, useEffect } from "react"
import data from './component/data'
import Button from './component/Button'
import People from './component/People'

function App() {

  const [ people, setPeople ] = useState(data)
  const [ index, setIndex ] =  useState(0)

  const nextSlide = () => {
    setIndex((oldIndex) =>{
      let index = oldIndex + 1
      if(index > people.length - 1){
        index = 0
      }
      return index
    })
  }

  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1
      if(index < 0){
        index = people.length - 1
      }
      return index
    })
  }

  useEffect(() => {
    let slider = setInterval(() => {
      nextSlide()
    }, 5000)
    return() => {
      clearInterval(slider)
    }
  }, [ index ])

  return (
    <section className="section">
      <div className="title">
        <h2><span>/</span>Reviews</h2>
      </div>

      <div className="section-center">
      <People people={people} index = {index}/>
      <Button prevSlide={prevSlide} nextSlide={nextSlide}/>
      </div>
      
    </section>
  );
}

export default App;
