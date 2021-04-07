import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const {id} = useParams()

  React.useEffect(() => {
    async function getCocktails() {
      const response = await fetch(`${url}${id}`)
      const data = response.json()
    }
  }, [id])


  return (
    <div>
      <h2>{id}</h2>
    </div>
  )
}

export default SingleCocktail
