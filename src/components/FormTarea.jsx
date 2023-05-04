import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'

function FormTarea() {
    // Create the 'tarea' state
    const [tarea, setTarea] = useState('')
    // Create and define the Dispatch
    const dispatch = useDispatch();

    // Function of add a tarea: 'agregarTarea()'
    function agregarTarea(e) {
        e.preventDefault()
        dispatch({ type: 'AGREGAR', payload: tarea })
        setTarea('')
    }

    return(
        <form onSubmit={ agregarTarea } >
            <input
                onChange={ (e) => setTarea(e.target.value) } // catch the value
                type="text"
                placeholder="Agregar Tarea"
                value={ tarea }
            />
            <button type="submit">
                Agregar Tarea
            </button>
        </form>   
    )
}

export default FormTarea