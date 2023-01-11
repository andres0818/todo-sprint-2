import React from 'react'
import './Formulario.scss'





const texto = (_data) => {

    let txtInput = document.querySelector('#texto');

    txtInput.addEventListener('keyup', (e) => {
        if (e.code === 'Enter' || e.code === 'NumpadEnter') {
            txtInput.value !== "" ? _data(txtInput.value) : console.log("");
            txtInput.value = ""            
        }
    });
}

const Formulario = ({ almacenarTarea }) => {

    return (
        <>
            <input onClick={()=>texto(almacenarTarea)} className='formulario' id="texto" type='text' placeholder='Currently typing' />

        </>
    )
}

export default Formulario