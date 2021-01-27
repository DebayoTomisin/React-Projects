import React, {useState} from "react"

import {useGlobalContext} from "./context"
import Hero from "./Hero"
import Sidebar from "./Sidebar"
import Navbar from "./Navbar"
import Sidemenu from "./Sidemenu"

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Sidebar/>
      <Sidemenu/>
    </>
  );
}

export default App;
