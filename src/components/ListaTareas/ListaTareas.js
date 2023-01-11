import React from 'react'
import './ListaTareas.scss'
import TareasOk from './Tareas/TareasOk';
import TareasPendientes from './Tareas/TareasPendientes';


const ListaTareas = ({ reiniciarTareasCompletadas,eliminarTarea, eliminarTareaCompletada, almacenarTareaCompletada, tarea, tareaOk }) => {
    return (

        <div className='ListaTareas'>
            <TareasPendientes
                almacenarTareaCompletada={almacenarTareaCompletada}
                eliminarTarea={eliminarTarea}
                tarea={tarea}
            />
            <TareasOk
                eliminarTareaCompletada={eliminarTareaCompletada}
                tareaOk={tareaOk}
            />
            <div className='ListaTareas__servicios'>
                <p>{tarea.length} items left</p>
                <div className='ListaTareas__botones'>
                    <button>All</button>
                    <button>Active</button>
                    <button>Complete</button>
                </div>
                <button onClick={()=>reiniciarTareasCompletadas()}>Clear Complete</button>
            </div>
        </div>
    )
}

export default ListaTareas