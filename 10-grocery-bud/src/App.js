import React, { useState, useEffect } from "react"
import Alert from "./component/Alert"
import List from './component/List'

function App() {

  const [ name, setName ] = useState('')
  const [ list, setList ] = useState([])
  const [ isEditting, setIsEdit ] = useState(false)
  const [ editId, setEditId ] = useState(null)
  const [ alert, setAlert ] = useState({show: false, msg : '', type: ''})

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('allow me to enjoy myself')

    if(!name){
      showAlert(true, 'allow me to enjoy myself', 'danger')      
    }
    
    else if (name && isEditting){

    }
    else{
      const newItem = {id: new Date().getTime().toString(), title: name}
      setList(...list, newItem)
      setName('')
    }
  }

  const showAlert = (show=false, msg ="", type="") => {
    setAlert({ show, msg, type })
  }

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} list= {list} removeAlert={showAlert}/>}
        <h3>Grocery Bud</h3>
        <div className="form-control">
          <input type="text" className="grocery" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter a Value"/>
          <button className="submit-btn" type="submit">{isEditting ? 'edit': 'submit' }</button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list}/>
          <button className="clear-btn">clear items</button>
        </div>
      )}
    </section>
  );
}

export default App;
