import React from 'react'

const ActionButton = ({ onClick, children }) => {
  return (
    <button onClick={onClick}>
        {children}
    </button>
  )
}

export default ActionButton
