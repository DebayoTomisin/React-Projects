import React, { useEffect, useContext, useReducer, } from "react"
import cartItems from "./data"
import reducer from "./reducer"

const AppContext = React.createContext()

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0
}

const AppProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState)
  
  const clearCart = () => {
    dispatch({type: "CLEAR"})
  }

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE', payload: id })
  }

  const increaseTotal = (id) => {
    dispatch({ type: "INCREASE", payload: id })
  }

  const decreaseTotal = (id) => {
    dispatch({ type: "DECREASE", payload: id })
  }

  useEffect(() => {
    console.log(state.cart)
    dispatch({type : "GET_TOTALS"})
  }, [state.cart])

  
  return(
    <AppContext.Provider value= {{
      ...state,
      clearCart,
      removeItem,
      increaseTotal,
      decreaseTotal
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, AppContext }
