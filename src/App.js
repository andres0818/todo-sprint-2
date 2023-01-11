import React from 'react'
import Formulario from './components/Formulario/Formulario'
import './App.scss'

const App = () => {
  return (
    <>
    <div className='App'>
      <h1 className='App__titulo'>TODO</h1>
      <Formulario/>    
    </div>
    </>
  )
}

export default App