import React from 'react'
import './Formulario.scss'





const texto = (almacenarTarea) => {

    let txtInput = document.querySelector('#texto');

    txtInput.addEventListener('keyup', (e) => {
        
        if (e.code === 'Enter' || e.code === 'NumpadEnter') {
            txtInput.value !== "" ? almacenarTarea(txtInput.value) : console.log("");
            txtInput.value = ""            
        }
    });
}

const Formulario = ({ almacenarTarea }) => {

    return (
        <div className='circle'>
            <input  onClick={()=>texto(almacenarTarea)} className='formulario' id="texto" type='text' placeholder='Currently typing' />

        </div>
    )
}

export default Formulario