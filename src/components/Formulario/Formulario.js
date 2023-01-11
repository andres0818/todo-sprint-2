import React from 'react'
import './Formulario.scss'


let tareas = []

const texto = () => {
    let txtInput = document.querySelector('#texto');

    txtInput.addEventListener('keyup', (e) => {
        if (e.code === 'Enter' || e.code === 'NumpadEnter') {

            txtInput.value !== "" ? tareas.push(txtInput.value) : console.log("");
            txtInput.value = ""
        }
    });
}

const Formulario = () => {

    return (
        <>
            <input onClick={texto} className='formulario' id="texto" type='text' placeholder='Currently typing' />

        </>
    )
}

export default Formulario