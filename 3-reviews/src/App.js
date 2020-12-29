import React, { useSate } from 'react'
import Reviews from './review'

function App() {
  return (
    <main>
      <section className="container">
        <h2>Our Reviews</h2>
        <div className="underline"></div>
        <Reviews />
      </section>
    </main>
    
  );
}

export default App;
