import React, { useContext, useState } from "react"

const AppContext =  React.createContext()

export const AppProvider = ({children}) => {
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSubMenu, setIsSubMenuOpen] = useState(false)

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  const openSubmenu = () => {
    setIsSubMenuOpen(true)
  } 

  const closeSubMenu = () => {
    setIsSubMenuOpen(false)
  }

  return <AppContext.Provider value = {{
    isSidebarOpen,
    openSidebar,
    closeSidebar,
    isSubMenu,
    openSubmenu,
    closeSubMenu
  }}>
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

