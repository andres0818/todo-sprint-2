import React, { useState } from 'react'
import Formulario from './components/Formulario/Formulario'
import ListaTareas from './components/ListaTareas/ListaTareas'
import DiaNoche from './components/DiaNoche/DiaNoche'
import './App.scss'




const App = () => {
  let [tarea, setTarea] = useState([])
  let [tareaOk, setTareaOk] = useState([])


  const AlmacenarTarea = (_data) => {
    setTarea(
      tarea = [...tarea, _data]
    )
  }

  const EliminarTarea = (_data) => {
    setTarea(
      tarea = tarea.filter(e => e !== _data)
    )
  }

  const TareaCompletada = (_data) => {

    setTareaOk(
      tareaOk = [...tareaOk, _data]
    )
    setTarea(
      tarea = tarea.filter(e => e !== _data)
    )
  }

  const NoTareaCompletada = (_data) => {

    setTarea(
      tarea = [...tarea, _data]
    )
    setTareaOk(
      tareaOk = tareaOk.filter(e => e !== _data)
    )
  }

  const EliminarTareaCompletada = (_data) => {
    setTareaOk(
      tareaOk = tareaOk.filter(e => e !== _data)
    )
  }

  const ReiniciarTareasCompletadas = () => {
    setTareaOk(
      tareaOk = []
    )
  }


  return (

    <div className='App'>
      <div className='App__cabecera'>
        <div className='App__diaNoche'>
          <h1 className='App__titulo'>TODO</h1>
          <DiaNoche/>
        </div>
        <Formulario almacenarTarea={AlmacenarTarea} />
      </div>
      <ListaTareas
        reiniciarTareasCompletadas={ReiniciarTareasCompletadas}
        eliminarTareaCompletada={EliminarTareaCompletada}
        almacenarTareaCompletada={TareaCompletada}
        noTareaCompletada={NoTareaCompletada}
        eliminarTarea={EliminarTarea}
        tareaOk={tareaOk}
        tarea={tarea}
      />
      <footer className='App__footer'>
        <p>Drog and drop to recorder list</p>
      </footer>
    </div>

  )
}

export default App