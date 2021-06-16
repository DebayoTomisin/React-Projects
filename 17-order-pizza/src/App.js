import Hero from "./components/Hero"
import {BrowserRouter as Router } from "react-router-dom"
import { GlobalStyles } from './globalStyles'
import Products from './components/Products'
import {productData} from './components/Products/data'

function App() {
  return (
    <Router>
      <GlobalStyles/>      
      <Hero/>
      <Products data={productData} heading= "Choose your favorite"/>
    </Router>
  );
}

export default App;
