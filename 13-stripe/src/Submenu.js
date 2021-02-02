import React, { useEffect, useState, useRef }from "react"
import {useGlobalContext} from "./context"

function Submenu() {
  const {isSubMenuOpen,  location, page: { page, links }} = useGlobalContext()

  const container = useRef(null)

  const [columns, setColumns] = useState('col-2')

  useEffect(() => {
    setColumns('col-2')
    const submenu = container.current;
    const {center, bottom} = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`
    console.log(links)

    if(links.length === 3){
      setColumns('col-3')
    }
    if(links.length === 4){
      setColumns('col-4')
    }
  }, [ page, location, links])

  return(
    <aside className={`${isSubMenuOpen ? "submenu": "submenu show"}`} ref={container}>
      <section>
        <h4>Page</h4>
        <div className= {`submenu-center ${columns}`}>
          {links.map((link, index) => {
            const {label, url, icon} = link
            return(
              <a key={index} href={url}>
                {icon} {label}
              </a>
            )
          })}
        </div>
      </section>
    </aside>
  )
}

export default Submenu
