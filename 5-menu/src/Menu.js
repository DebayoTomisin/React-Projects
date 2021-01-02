const Menu = ({ menuItems}) => {
    return(
        <div className='section-center'>
            {menuItems.map(item => {
                const {id, title, desc, price, img } = item;
                return(
                    <article key={id} className="menu-item">
                        <img src={img} alt={title} className="photo"/>
                        <header>
                            <h4>{title}</h4>
                            <h4 className="price">{price}</h4>
                        </header>
                        <p className="item-text">{desc}</p>
                    </article>
                )
            })} 
        </div>
    )
}

export default Menu
