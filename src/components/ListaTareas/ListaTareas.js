import React from 'react'
import './ListaTareas.scss'
import TareasOk from './Tareas/TareasOk';
import TareasPendientes from './Tareas/TareasPendientes';












const ListaTareas = ({ noTareaCompletada, reiniciarTareasCompletadas, eliminarTarea, eliminarTareaCompletada, almacenarTareaCompletada, tarea, tareaOk }) => {

    
    const all = () => {
        const active = document.querySelector('.tareasPendientes')
        const complete =document.querySelector('.tareasOk')


        

        active.setAttribute(
                'style',
                'display:block'
            )
        
        complete.setAttribute(
                'style',
                'display:block'
            )
        
     } 

     const pendientes = () => {
        const active = document.querySelector('.tareasPendientes')
        const complete =document.querySelector('.tareasOk')


        

        active.setAttribute(
                'style',
                'display:block'
            )
        
        complete.setAttribute(
                'style',
                'display:none'
            )
        
     } 
     
     const completadas = () => {
        const active = document.querySelector('.tareasPendientes')
        const complete =document.querySelector('.tareasOk')


        

        active.setAttribute(
                'style',
                'display:none'
            )
        
        complete.setAttribute(
                'style',
                'display:block'
            )
        
     } 




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
                <div className='ListaTareas__botones'>
                    <button onClick={()=>all()} className='ListaTareas__hoverNoche'>All</button>
                    <button onClick={()=>pendientes()} className='ListaTareas__hoverNoche'>Active</button>
                    <button onClick={()=>completadas()} className='ListaTareas__hoverNoche'>Complete</button>
                </div>
                <button onClick={() => reiniciarTareasCompletadas()} className='ListaTareas__hoverNoche'>Clear Complete</button>
            </div>
        </div>
    )
}

export default ListaTareas