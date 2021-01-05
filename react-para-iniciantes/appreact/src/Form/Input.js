import React from 'react'

function Input({label, id, ...props}) {
  return (
    <div style={{margin: '1rem 0'}}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" {...props} />
    </div>
  )
}

export default Input
