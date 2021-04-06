import React, {useState, useRef, useEffect } from "react"
import { useGlobalContext } from "../context"

const SearchForm = () => {

    const {setSearchTerm} = useGlobalContext()
    const searchValue = useRef('')

    const handleChange = () => {
        setSearchTerm(searchValue.current.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    useEffect(() => {
        searchValue.current.focus()
    })

    return(
        <section className="section search">
            <form className="search-form" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">Search your favourite cocktail</label>
                    <input 
                        id="name" 
                        type="text"
                        ref={searchValue}
                        onChange={handleChange}
                    />
                </div>
            </form>
        </section>
    )
}

export default SearchForm