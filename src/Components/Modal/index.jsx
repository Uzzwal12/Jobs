import React from 'react'
import './modal.css'

const Modal = ({
  onExit,
  children
}) => {
  return (
    <div 
      className="modal-wrapper"
      onClick={onExit}
    >
      <div className="modal-children">{children}</div>
    </div>
  )
}

export default Modal
