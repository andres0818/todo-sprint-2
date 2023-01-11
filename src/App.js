import React, { useState } from 'react'
import Formulario from './components/Formulario/Formulario'
import './App.scss'
import ListaTareas from './components/ListaTareas/ListaTareas'




const App = () => {
  const [tarea, setTarea] = useState([])

  const AlmacenarTarea = (_data) => {

    setTarea(
      tarea.push(_data)
    )
    console.log(tarea)
  }

  return (
    <>
      {/* <div className='App'>
        <h1 className='App__titulo'>TODO</h1>
        <Formulario almacenarTarea={AlmacenarTarea} />
      </div> */}
      <ListaTareas/>
    </>
  )
}

export default App