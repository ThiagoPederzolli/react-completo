import React, { useState } from 'react'
import ButtonModal from './ButtonModal';
import Modal from './Modal';

function App() {
  // const [modal, setModal] = useState(false);
  const [modal, setModal] = useState(() => {
    const ativo = window.localStorage.getItem('ativo');
    return ativo;
  });
  return (
    <div>
      <div>{modal ? 'Modal Aberto!' : 'Modal Fechado!'}</div>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
    </div>
  )
}

export default App
