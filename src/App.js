import React from 'react';

import Header from './components/Header'
import Produto from './components/Produto'


const App = () => {

  const [dados, setDados] = React.useState(null)
  const [carregando, setCarregando] = React.useState(null)
  

  return (
    <React.Fragment>
      <Header setDados={setDados} setCarregando={setCarregando}/>
      {carregando && <h3 style={{marginLeft:'15.5rem'}}>Loading...</h3>}
      {!carregando && dados && <Produto dados={dados}/>}
    </React.Fragment>
  )
}

export default App