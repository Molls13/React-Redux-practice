import reducer from "./reducer/reducers";
// import { configureStore } from 'redux'
import { createStore } from "redux";

//local storage here?
// const storage = localStorage.getItem(JSON.parse('todos'))
const persistedState = localStorage.getItem('todos') 
                    ? JSON.parse(localStorage.getItem('todos'))
                    : []

export const store = createStore(reducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(()=>{
    localStorage.setItem('todos', JSON.stringify(store.getState()))
  })
