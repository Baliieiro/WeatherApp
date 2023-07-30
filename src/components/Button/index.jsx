import React from 'react'
import './Button.css'

const Button = ({ children, onclick }) => {
  return (
    <button className="button" onClick={onclick}>
      {children}
    </button>
  )
}

export default Button
