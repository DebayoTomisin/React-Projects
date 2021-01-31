import React, {useState} from "react"

import {useGlobalContext} from "./context"
import Hero from "./Hero"
import Sidebar from "./Sidebar"
import Navbar from "./Navbar"
import Submenu from "./Submenu"

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Sidebar/>
      <Submenu/>
    </>
  );
}

export default App;
