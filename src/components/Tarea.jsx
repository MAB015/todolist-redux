import React, { useState } from "react";
import { useDispatch } from "react-redux";

function Tarea({ tarea }){
    const dispatch = useDispatch()

    const [editando, setEditando] = useState(false)

    const [tareaEditada, setTareaEditada] = useState(tarea);

    const actualizarTareaEditada = (e) => {
        setTareaEditada(e.target.value)
    }

    function editarTarea() {
        if(editando){
            if(tareaEditada.trim())
                dispatch({
                    type: 'EDITAR',
                    payload: {
                        tareaAnterior: tarea,
                        tareaEditada: tareaEditada
                    }
                })
        }

        setEditando(!editando)
    }

    const textoTarea = <span>{tarea}</span>

    const inputTareaEditada = <input type="text" value={tareaEditada} onChange={actualizarTareaEditada} />


    return (
        <div className="tarea">
            {
                editando ? inputTareaEditada : textoTarea
            }
            <button onClick={ editarTarea }>
                {
                    editando ? 'Guardar' : 'Editar'
                }
            </button>
            <button
                onClick={() => dispatch({
                    type: 'ELIMINAR',
                    payload: tarea
                })}
                className="btn-eliminar"
            >
                Eliminar
            </button>
        </div>
    )
}

export default Tarea