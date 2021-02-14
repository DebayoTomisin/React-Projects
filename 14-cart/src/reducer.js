const reducer = (state, action) => {
  if(action.type === "CLEAR"){
    return { ...state, cart: []}
  }

  if (action.type === "REMOVE"){
    
  }
}

export default reducer
