import React from 'react'
import './DiaNoche.scss'
import fondoNoche from '../../img/fondo.png'
import fondoDia from '../../img/dia.png'




const DiaNoche = () => {

    const validarCheckbox = () => {

        const checkbox = document.getElementById('checkbox')
        checkbox.addEventListener('change', estado)



        function estado() {
            if (checkbox.checked === true) {
                const dia = document.querySelector('body')
                dia.setAttribute(
                    'style',
                    `background-image:url(${fondoDia})`,
                    'backgroundSize :cover'
                )

                const colorFormulario = document.querySelector('.formulario')
                colorFormulario.setAttribute(
                    'style',
                    "background-color: white"
                )


                const colorLista = document.querySelector('.ListaTareas')
                colorLista.setAttribute(
                    'style',
                    "background-color: white"
                )

                const texto = document.querySelectorAll('.ListaTareas__texto')
                texto.forEach(e =>
                    e.setAttribute(
                        'style',
                        "color:black",
                        "background:red"
                    )
                )
                const checkedTarea = document.querySelectorAll('.ListaTareas__pendientes')
                checkedTarea.forEach(e =>
                    e.setAttribute(
                        'style',
                        "background-color: white",
                    )
                )



                    const btnServicios= document.querySelectorAll('.ListaTareas__hoverNoche')
                    btnServicios.forEach(e=>{
                        e.classList.remove('ListaTareas__hoverNoche')
                        e.classList.add('ListaTareas__hoverDia')
                        console.log(e);
                    })




            }
            else {
                const noche = document.querySelector('body')
                noche.setAttribute(
                    'style',
                    `background-image:url(${fondoNoche})`,
                    'backgroundSize :cover'
                )
                const colorFormulario = document.querySelector('.formulario')
                colorFormulario.setAttribute(
                    'style',
                    "box-shadow:none"
                )
                const colorLista = document.querySelector('.ListaTareas')
                colorLista.setAttribute(
                    'style',
                    "box-shadow:none"
                )

                const btnServicios= document.querySelectorAll('.ListaTareas__hoverDia')
                    btnServicios.forEach(e=>{
                        e.classList.remove('ListaTareas__hoverDia')
                        e.classList.add('ListaTareas__hoverNoche')
                        console.log(e);
                    })

            }
        }
    }


    return (
        <label onClick={validarCheckbox} className="content-input">
            <input id='checkbox' name='checkbox' type="checkbox" />
            <i></i>
        </label>
    )
}

export default DiaNoche