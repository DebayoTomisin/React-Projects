import React from "react"
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import { useGlobalContext } from "./context";


function Sidebar(){
  const { closeSidebar, isSidebarOpen} = useGlobalContext()
  return(
    <aside className={`${isSidebarOpen ? "sidebar-wrapper-show": "sidebar-wrapper"}`}>
      <div className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes/>
        </button>
        <div className="sidebar-links">
          {
            sublinks.map((item, index) => {
              const {links, pages} = item
              return(
                <article key={index}>
                  <h4>{pages}</h4>
                  <div className="sidebar-sublinks">
                    {links.map((link, index) => {
                      const {url, icon, label} = link
                      return(
                        <a href={url}>{label}{icon}</a>
                      )
                    })}
                  </div>
                </article>
              )
            })
          }
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
