import React from 'react'

const TareasPendientes = ({eliminarTarea,tarea,almacenarTareaCompletada}) => {
  return (
    <div className='tareasPendientes'>
      {
    tarea.map((e,index) => {
        return (

            <div key={index} className='ListaTareas__contenedor'>
                <span onClick={()=>almacenarTareaCompletada(e)} className='ListaTareas__boton'>
                    <span className='ListaTareas__pendientes'></span>
                </span>
                <p className='ListaTareas__texto'>{e}</p>
                <p onClick={()=>eliminarTarea(e)} className='ListaTareas__eliminar'>x</p>
            </div>

        )
    })}
    </div>
  )
}

export default TareasPendientes