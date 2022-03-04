import {SetAddCashAction, SetAuthAction, SetRemoveCashAction, SetUserAction, UserActionEnum} from "./types";
import {IUser} from "../../../models/IUser";
import {AppDispatch} from "../../index";
import axios from "axios";
import {Alert} from "antd";


export const UserActionCreators = {
    setIsAuth: (isAuth: boolean): SetAuthAction => ({type: UserActionEnum.SET_AUT, payload: isAuth}),
    setUser: (user: IUser): SetUserAction => ({type: UserActionEnum.SET_USER, payload: user}),
    setAddCash: (cash: string): SetAddCashAction => ({type: UserActionEnum.ADD_CASH, payload: cash}),
    setRemoveCah: (cash: string): SetRemoveCashAction => ({type: UserActionEnum.REMOVE_CASH, payload: cash}),
    setLogin: (user: IUser) => async (dispatch: AppDispatch) => {
        try {
            const response = await axios.get<IUser[]>('./users.json')
            if(response.data.length === 0) throw new Error('Попробуйте еще раз!')
            const mockUser = response.data.find(users => users.username === user.username && users.password === user.password)
            if(mockUser) {
                dispatch(UserActionCreators.setIsAuth(true))
                dispatch(UserActionCreators.setUser(user))
                alert('Вы успешно вошли в систему!')
            } else {
                throw new Error('Вы ввели не правильный логин или пароль')
            }
        } catch (e) {
            alert(e)
            return e
        }
    }
}