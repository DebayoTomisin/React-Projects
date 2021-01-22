import React, { useState, useContext } from "react"

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  const openSideBar = () => {
    setIsSideBarOpen(true)
  }

  const closeSideBar = () => {
    setIsSideBarOpen(false)
  }

  return(
    <AppContext.Provider value={{
      isModalOpen,
      isSideBarOpen,
      closeModal,
      openModal,
      openSideBar,
      closeSideBar
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

