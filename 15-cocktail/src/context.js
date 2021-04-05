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
            const response = await fetch(`${url}${searchTerm}`);
            const data =  await response.json()
            const {drinks} = data
            console.log(drinks)
            if(drinks){

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
        <AppContext 
            value={{
                loading, 
                setSearchTerm,
                cocktails,
            }}>
            {children}
        </AppContext>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppProvider, AppContext}