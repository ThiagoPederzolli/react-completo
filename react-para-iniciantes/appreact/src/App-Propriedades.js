import React from 'react'
import Form from './Form/Form'

function App() {
  return (
    <div>
      <Form />
    </div>
  )
}

export default App



// // const Titulo = ({cor, texto}) => {
// //   return <h1 style={{color: cor}}>{texto}</h1>
// // }

// const Titulo = (props) => {
//   return <h1>{props.children}</h1>
// }

// const App = () => {
//   return (
//     <div>
//       <Titulo>Meu título 1</Titulo> 
//       <Titulo>
//         <p>Meu título 2</p>
//         <p>Meu título 3</p>
//       </Titulo>
//     </div>
//   )
// }