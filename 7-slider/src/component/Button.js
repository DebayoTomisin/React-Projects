import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'

function Button({ prevSlide, nextSlide }){
    return(
        <div>
            <button className="prev" onClick={prevSlide}>
                <FiChevronLeft/>
            </button>

            <button onClick={nextSlide} className="next">
                <FiChevronRight/>
            </button>  
        </div>      
    )
}

export default Button
