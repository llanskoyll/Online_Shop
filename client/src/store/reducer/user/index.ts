import {UserAction, UserActionEnum, UserState} from "./types";
import {IUser} from "../../../models/IUser";
import {IBasket} from "../../../models/IBasket";
import {sumStringNumber} from "../../../helperFunction/sumStringNumber";

const initialState: UserState = {
    isAuth: false,
    cash: '0',
    user: {} as IUser,
    basket: {} as IBasket
}


const userReducer = (state = initialState, action:UserAction):UserState =>  {
    switch (action.type) {
        case UserActionEnum.LOGIN:
            return {...state, user: action.payload}
        case UserActionEnum.SET_AUT:
            return {...state, isAuth: action.payload}
        case UserActionEnum.SET_USER:
            return {...state, user: action.payload}
        case UserActionEnum.ADD_CASH:
            return {...state, cash: (parseInt(state.cash) + parseInt(action.payload)).toString()}
        case UserActionEnum.REMOVE_CASH:
            return {...state, cash: sumStringNumber(state.cash,action.payload)}
        case UserActionEnum.ADD_ITEM_BASKET:
            return {...state, basket: action.payload}
        default:
            return state
    }
}
export default userReducer