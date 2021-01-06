import React from 'react'

function ButtonModal({setModal}) {
  return (
    <button onClick={() => setModal(true)}>
      Abrir
    </button>
  )
}

export default ButtonModal
