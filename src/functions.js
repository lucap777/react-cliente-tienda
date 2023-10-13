/*----------------------Programar las alerta de SweetaAlert y funcines que necesitamos------------------*/
import React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


export function show_alerta(mensaje,icono,foco=''){
    onfocus(foco) 
    const MySwal = withReactContent(Swal)
    MySwal.fire({
        title: mensaje,
        icon: icono,
    })
}

function onfocus(foco){ //funcion para poner el foco en un elemento del formulario
    if(foco!==''){
        document.getElementById(foco).focus()
    }
}