import React from 'react';
import { GlobalStorage } from './GlobalContext';
import Produto from './Produto-useContext';


function App() {
  return (
    <GlobalStorage>
      <div>
        <Produto />
        Olá!
      </div>
    </GlobalStorage>
  )
}

export default App



// import Produto from './Produto-useContext';
// import UserContext from './UserContext';

// function App() {
//   return (
//     <UserContext.Provider value={{nome: 'Thiago'}}>
//       <div>
//         <Produto />
//         Olá!
//       </div>
//     </UserContext.Provider>
//   )
// }

// export default App
