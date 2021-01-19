import React, { useState, useEffect } from "react"
import Alert from "./component/Alert"
import List from './component/List'

const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  if(list) {
    return JSON.parse(localStorage.getItem('list'))
  } else {
    return []
  }
}

function App() {

  const [ name, setName ] = useState('')
  const [ list, setList ] = useState(getLocalStorage())
  const [ isEditting, setIsEditting ] = useState(false)
  const [ editId, setEditId ] = useState(null)
  const [ alert, setAlert ] = useState({show: false, msg : '', type: ''})

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('allow me to enjoy myself')

    if(!name){
      showAlert(true, 'allow me to enjoy myself', 'danger')      
    }
    
    else if (name && isEditting){
      setList(
        list.map(item => {
          if(item.id === editId){
            return {...item, title: name}
          }
          return item
        })
      )
      setName('')
      setEditId(null)
      setIsEditting(false)
      showAlert(true, 'value has been changed', 'success')

    }
    else{
      const newItem = {id: new Date().getTime().toString(), title: name}
      setList([...list, newItem])
      setName('')
    }
  }

  const showAlert = (show=false, msg ="", type="") => {
    setAlert({ show, msg, type })
  }

  const clearList = () => {
    showAlert(true, 'List has been cleared', 'success')
    setList([])
  }

  const editItem = (id) => {
    const specItem = list.find(item => item.id === id)
    setIsEditting(true)
    setEditId(id)
    setName(specItem.title)
  }

  const removeItem = (id) => {
    showAlert(true, 'item has been removed', 'danger')
    setList(list.filter(item => item.id !== id))
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} list= {list} removeAlert={showAlert} />}
        <h3>Grocery Bud</h3>
        <div className="form-control">
          <input type="text" className="grocery" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter a Value"/>
          <button className="submit-btn" type="submit">{isEditting ? 'edit': 'submit' }</button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} editItem ={editItem} removeItem={removeItem} />
          <button className="clear-btn" onClick={clearList}>clear items</button>
        </div>
      )}
    </section>
  );
}

export default App;
