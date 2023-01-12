import { Action } from "./action"


export interface NotesState {
    id: string[]
}

const initialState = {
    id: []
}


export const cardsReducer = (state: NotesState = initialState, action: Action) => {
    switch (action.type) {
        case "ADD_CARD":{
            return {...state, id: [...state.id, action.payload ] }
    }
    default:
        return state
}
}