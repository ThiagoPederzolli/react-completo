import React from 'react'

function ButtonModal({setModal}) {
  function handleClick() {
    setModal((ativo) => !ativo);
  }
  return (
    // <button onClick={() => setModal(true)}>
    <button onClick={handleClick}>
      Abrir
    </button>
  )
}

export default ButtonModal
