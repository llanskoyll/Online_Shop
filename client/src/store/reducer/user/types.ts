import {IUser} from "../../../models/IUser";
import {IBasket} from "../../../models/IBasket";
import {IProduct} from "../../../models/IProduct";


export interface UserState {
    isAuth: boolean,
    cash: string,
    user: IUser,
    basket: IBasket;
}

export enum UserActionEnum {
    SET_AUT = 'SET_AUTH',
    SET_USER = 'SET_USER',
    ADD_CASH = 'ADD_CASH',
    REMOVE_CASH = 'REMOVE_CASH',
    ADD_ITEM_BASKET = 'ADD_ITEM_BASKET',
    LOGIN = 'LOGIN',
}
export interface SetLoginAction {
    type: UserActionEnum.LOGIN,
    payload: IUser
}
export interface SetUserAction {
    type: UserActionEnum.SET_USER,
    payload: IUser
}

export interface SetAuthAction {
    type: UserActionEnum.SET_AUT,
    payload: boolean
}

export interface SetAddCashAction {
    type: UserActionEnum.ADD_CASH,
    payload: string
}
export interface SetRemoveCashAction {
    type: UserActionEnum.REMOVE_CASH,
    payload: string
}
export interface SetAddItemBasketAction {
    type: UserActionEnum.ADD_ITEM_BASKET,
    payload: IBasket
}
export type UserAction =
    SetUserAction | SetAuthAction | SetAddCashAction |
    SetRemoveCashAction | SetAddItemBasketAction | SetLoginAction


