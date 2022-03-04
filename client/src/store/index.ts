import {applyMiddleware, combineReducers, createStore} from "redux";
import reducers from "./reducer/reducers";
import thunk from 'redux-thunk'

const rootReducer = combineReducers(reducers)

export const store = createStore(rootReducer,applyMiddleware(thunk))


export type RootState = ReturnType<typeof store.getState> // Type State`s
export type AppDispatch = typeof store.dispatch // Type Dispatch