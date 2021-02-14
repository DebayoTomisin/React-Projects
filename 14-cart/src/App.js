import Navbar from "./Navbar"
import Container from "./Container"
import { useGlobalContext } from "./context"

function App() {
  const { loading }  = useGlobalContext()

  if(loading){
    return <section className="loading">
      <h1>Loading...</h1>
    </section>
  }

  return <main>
    <Navbar/>
    <Container/>
  </main>
  
}

export default App;
