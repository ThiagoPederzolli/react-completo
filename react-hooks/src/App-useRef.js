import React, { useEffect, useRef, useState } from 'react'

function App() {
  const [carrinho, setCarrinho] = useState(0);
  const [notificacao, setNotificacao] = useState('');
  const timeoutRef = useRef();

  function handleClick() {
    setCarrinho(carrinho + 1);
    setNotificacao('Item adicionado ao carrinhho');

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setNotificacao('');
    }, 2000)
  }
  return (
    <div>
      <p>{notificacao}</p>
      <button
        type="button"
        onClick={handleClick}
      >
      Adicionar Carrinho {carrinho}</button>
    </div>
  )
}

export default App

// const video = useRef();
// useEffect(() => {
//   console.log(video.current.currentTime);
// }, []);
// return (
//   <video ref={video}/>  
// )

// const [comentarios, setComentarios] = useState([]);
//   const [input, setInput] = useState('');
//   const inputElement = useRef();

//   const handleClick = () => {
//     setComentarios([...comentarios, input]);
//     setInput('');
//     inputElement.current.focus();
//   }
// return (
//   <div>
//     <ul>
//       {comentarios.map(comentario => <li key={comentario}> {comentario} </li>)}
//     </ul>
//     <input
//       type="text"
//       value={input}
//       ref={inputElement}
//       onChange={({target}) => setInput(target.value)}
//     />
//     <button type="button" onClick={handleClick}>Enviar novo comentário</button>
//   </div>
// )