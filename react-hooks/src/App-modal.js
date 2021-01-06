import React, { useState } from 'react'
import ButtonModal from './ButtonModal';
import Modal from './Modal';

function App() {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <div>{modal ? 'Modal Aberto!' : 'Modal Fechado!'}</div>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
    </div>
  )
}

export default App
