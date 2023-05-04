import { configureStore } from '@reduxjs/toolkit'

// Create the initial state
const initialState = {
    tareas: [],
    // subTareas: []
}


function tareaReducer( state = initialState, action ) {
    switch (action.type) {
        case 'AGREGAR':
            return { ...state, tareas: [ ...state.tareas, action.payload ] }
        case 'EDITAR':
            return { ...state, tareas: state.tareas.map((tarea) => tarea === action.payload.tareaAnterior ? action.payload.tareaEditada : tarea) }
        case 'ELIMINAR':
            return { ...state, tareas: state.tareas.filter((t) => t !== action.payload ) }
        default:
            return state;
    }
}

// Configuration of the store
const store = configureStore({
    reducer: tareaReducer
})

export default store