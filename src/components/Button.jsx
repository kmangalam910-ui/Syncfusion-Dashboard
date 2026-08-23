import React from 'react'

const Button = ({color, bgColor, size, text, borderRadius}) => {
  return (
    <button 
      style={{backgroundColor: bgColor, color, borderRadius}}
      className={`text-${size} p-3 hover:drop-shadow-md hover:drop-shadow-black cursor-pointer`}
    >
      {text}
    </button>
  )
}

export default Button;