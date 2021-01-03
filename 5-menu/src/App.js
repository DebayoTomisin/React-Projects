import { useState } from 'react'
import Menu from './Menu'
import Category from './Categories'
import data from './data'

const allCategories = ['all', ...new Set(data.map(item => item.category))]

function App() {

  const [menuItems, setMenuItem] = useState(data)
  const [categories, setCategories] = useState(allCategories)
  
  const filterCats = (category) => {
    if(category = 'all'){
      setMenuItem(data)
      return 
    }
    const newCat = data.filter(item => item.category === category)
    setMenuItem(newCat)
  }
  
  return (
    <main>
      <section className="menu section">
        <div className="title"><h2>Our Menu</h2></div>
        <div className="underline"></div>

        <Category categories={categories} filterCats= {filterCats}/>
        <Menu menuItems={menuItems}/>
      </section>
    </main>
  );
}

export default App;
