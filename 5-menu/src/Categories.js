const Categories = ({ categories, filterCats }) => {
    return(
        <div className="btn-container">
            {categories.map((cat, index) => {
                return(
                    <button key={index} onClick={() => filterCats(cat)} className="filter-btn" type="button">
                        {cat}
                    </button>
                )
            })}
        </div>
    )
}

export default Categories
