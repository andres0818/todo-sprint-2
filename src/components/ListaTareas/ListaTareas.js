import React from 'react'
import './ListaTareas.scss'


let lista = ["Soy la lista y tengo tareas ", "Soy la lista y tengo tareas "]
let listaOK=["Soy la lista y ya hice las tareas ","Soy la lista y ya hice las tareas ","Soy la lista y ya hice las tareas ",]

const ListaTareas = () => {
    return (

        <div className='ListaTareas'>
            {
                listaOK.map(e => {
                    return (

                        <div className='ListaTareas__contenedor'>
                            <span className='ListaTareas__boton'>
                                <span className='ListaTareas__completada'>✓</span>
                            </span>
                            <p className='ListaTareas__texto'>{e}</p>
                            <p className='ListaTareas__eliminar'>x</p>
                        </div>

                    )
                })
            }
            {
                lista.map(e => {
                    return (

                        <div className='ListaTareas__contenedor'>
                            <span className='ListaTareas__boton'>
                                <span className='ListaTareas__pendientes'></span>
                            </span>
                            <p className='ListaTareas__texto'>{e}</p>
                            <p className='ListaTareas__eliminar'>x</p>
                        </div>

                    )
                })
            }
            <div className='ListaTareas__servicios'>
                <p>{lista.length} items left</p>
                <div className='ListaTareas__botones'>
                    <button>All</button>
                    <button>Active</button>
                    <button>Complete</button>
                </div>
                <button>Clear Complete</button>
            </div>
        </div>
    )
}

export default ListaTareas