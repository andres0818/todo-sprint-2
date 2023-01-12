import React from 'react'
import './ListaTareas.scss'
import TareasOk from './Tareas/TareasOk';
import TareasPendientes from './Tareas/TareasPendientes';












const ListaTareas = ({ noTareaCompletada, reiniciarTareasCompletadas, eliminarTarea, eliminarTareaCompletada, almacenarTareaCompletada, tarea, tareaOk }) => {


    

     
   

    return (

        <div className='ListaTareas'>
            <div>

                <TareasPendientes
                    almacenarTareaCompletada={almacenarTareaCompletada}
                    eliminarTarea={eliminarTarea}
                    tarea={tarea}
                />
                <TareasOk
                    eliminarTareaCompletada={eliminarTareaCompletada}
                    noTareaCompletada={noTareaCompletada}
                    tareaOk={tareaOk}
                />
            </div>
            <div className='ListaTareas__servicios'>
                <p>{tarea.length} items left</p>
                <div  className='ListaTareas__botones'>
                    <button className='ListaTareas__hoverNoche'>All</button>
                    <button className='ListaTareas__hoverNoche'>Active</button>
                    <button className='ListaTareas__hoverNoche'>Complete</button>
                </div>
                <button onClick={() => reiniciarTareasCompletadas()} className='ListaTareas__hoverDia'>Clear Complete</button>
            </div>
        </div>
    )
}

export default ListaTareas