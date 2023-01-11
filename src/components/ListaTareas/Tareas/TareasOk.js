import React from 'react'





const TareasOk = ({noTareaCompletada,eliminarTareaCompletada,tareaOk}) => {
  return (
    tareaOk.map((e,index) => {
        return (

            <div key={index} className='ListaTareas__contenedor'>
                <span onClick={()=>noTareaCompletada(e)} className='ListaTareas__boton'>
                    <span className='ListaTareas__completada'>✓</span>
                </span>
                <p className='ListaTareas__texto ListaTareas__tachado'>{e}</p>
                <p onClick={()=>eliminarTareaCompletada(e)} style={{cursor:'pointer'}} className='ListaTareas__eliminar'>x</p>
            </div>

        )
    })
  )
}

export default TareasOk