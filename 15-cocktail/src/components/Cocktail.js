import React from "react"
import { Link } from "react-router-dom"

const Cocktail = ({ id, info, name, glass, image }) => {
    return(
       <article className="cocktail">
           <div className="image-container">
               <img src={image} alt={name}/>
           </div>
           <div classname="cocktail-footer">
               <h3>{name}</h3>
               <h3>{glass}</h3>
               <p>{info}</p>
               <Link className="btn btn-primary btn-details" to={`/cocktail/${id}`}>Details</Link>
           </div>
       </article>
    )
}

export default Cocktail
