import React, {useState} from "react"
import Loading from "../components/Loading"
import Cocktail from "./Cocktail"
import {useGlobalContext} from '../context'

const CocktailList = () => {
    const {cocktails, loading} = useGlobalContext()
    if(loading){
        return <Loading/>
    }
    if(cocktails.length < 1){
        return <h2>No cocktails match your search criteria</h2>
    }
    return(
        <section className="section">
            <h2 className="section-title">Cocktails</h2>
            <div className="cocktails-center">
                {cocktails.map(item => {
                    return  <Cocktail key={item.id} {...item}/>
                })}
            </div>
        </section>
    )
}

export default CocktailList
