import React from "react";
import { useSelector } from 'react-redux'
import Tarea from "./Tarea";

function ListaTarea(){

    const tareas = useSelector( ( state ) => state.tareas )

    return(
        <div>
            {
                tareas.map( ( tarea ) => (
                    <Tarea
                        key = { tarea }
                        tarea = { tarea }
                    />
                ) )
            }
        </div>
    )
}

export default ListaTarea