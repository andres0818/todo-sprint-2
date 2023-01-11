import React, { useState } from 'react'
import Formulario from './components/Formulario/Formulario'
import ListaTareas from './components/ListaTareas/ListaTareas'
import './App.scss'
import sol from './img/sun.png'




const App = () => {
  let [tarea, setTarea] = useState([])
  let [tareaOk, setTareaOk] = useState([])


  const AlmacenarTarea = (_data) => {
    setTarea(
      tarea = [...tarea, _data]
    )
    console.log(tarea);
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
          <img src={sol} alt='' />
        </div>
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
      <footer className='App__footer'>
        <p>Drog and drop to recorder list</p>
      </footer>
    </div>

  )
}

export default App