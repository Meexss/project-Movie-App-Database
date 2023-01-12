import {createStore} from "@reduxjs/toolkit";
import { cardsReducer } from "./cardsReducer";


const  store = createStore(cardsReducer )

export default store