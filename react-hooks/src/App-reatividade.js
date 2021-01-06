import React, { useState } from 'react'

function App() {
  const [items, setItems] = useState(['Item 1', 'Item 2']);
  function handleClick() {
    setItems([...items, 'Item 3'])
    console.log(items)
  }
  return (
    <div>
      Olá!
      <p>{items}</p>
      <button type="button" onClick={handleClick}>Clicar</button>
    </div>
  )
}

export default App
