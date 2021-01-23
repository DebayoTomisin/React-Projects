import React from "react"
import { FaTimes } from 'react-icons/fa'

const Modal = () => {
  return(
    <div className="show-modal modal-overlay">
      <div className="modal-container">
        <h3>This modal content is sponsored by all the tech men out there, stay strong kings.</h3>
        <button className="close-modal-btn">
          <FaTimes/>
        </button>
      </div>
    </div>
  )
}

export default Modal
