export interface Action {type: 'ADD_CARD', payload: string}

export const  addCard = (id: string): Action => ({
    type: "ADD_CARD",
    payload: id,
})