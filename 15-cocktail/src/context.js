import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('a')
    const [cocktails, setCocktails] = useState([])

    const fetchCocktails = async () => {
        setLoading(true)
        try {
            setLoading(false)
            const response = await fetch(`${url}${searchTerm}`);
            const data =  await response.json()
            const {drinks} = data
            console.log(drinks)

            if(drinks){
               
                const newCocktails = drinks.map( item => {
                    const {
                        idDrink,
                        strAlcoholic,
                        strGlass,
                        strDrink,
                        strDrinkThumb,
                    } = item
                    return{
                        id: idDrink,
                        info: strAlcoholic,
                        name: strDrink,
                        glass: strGlass,
                        image: strDrinkThumb
                    }
                })
                setCocktails(newCocktails)
                
            }
            else{
                setLoading(false)
                setCocktails([])
            }
            
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        fetchCocktails()
    }, [searchTerm, fetchCocktails])

    return(
        <AppContext.Provider 
            value={{
                loading, 
                setSearchTerm,
                cocktails,
            }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppProvider, AppContext}