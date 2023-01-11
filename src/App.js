import React, { useState } from 'react'
import Formulario from './components/Formulario/Formulario'
import './App.scss'
import ListaTareas from './components/ListaTareas/ListaTareas'




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
    setTarea(
      tarea = tarea.filter(e => e !== _data)
    )
    setTareaOk(
      tareaOk = [...tareaOk, _data]
    )
    console.log(tareaOk);
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
        <h1 className='App__titulo'>TODO</h1>
        <Formulario almacenarTarea={AlmacenarTarea} />
      </div>
      <ListaTareas
        reiniciarTareasCompletadas={ReiniciarTareasCompletadas}
        eliminarTareaCompletada={EliminarTareaCompletada}
        almacenarTareaCompletada={TareaCompletada}
        eliminarTarea={EliminarTarea}
        tareaOk={tareaOk}
        tarea={tarea}
      />
    </div>

  )
}

export default App