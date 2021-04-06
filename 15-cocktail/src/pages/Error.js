import React from "react"
import {Link} from "react-router-dom"


const Error = () => {
    return(
        <section className="error-section section">
            <div className="error-container">
                <h2 className="section-title">
                    Oops! There is nothing here!
                </h2>
                <Link to= "/" className="btn btn-primary">Back Home</Link>
            </div>
        </section>
    )
}

export default Error
