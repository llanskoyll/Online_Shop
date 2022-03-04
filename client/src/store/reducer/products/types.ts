import {IProduct} from "../../../models/IProduct";


export interface ProductsState {
    products: IProduct[]
}

export enum ProductsActionEnum {
    ADD_PRODUCT = 'ADD_PRODUCT',
    REMOVE_PRODUCT = 'REMOVE_PRODUCT',
}
export interface SetProduct {
    type: ProductsActionEnum.ADD_PRODUCT,
    payload: IProduct[]
}
export interface SetRemoveProduct {
    type: ProductsActionEnum.REMOVE_PRODUCT,
    payload: IProduct
}

export type ProductsAction = SetProduct | SetRemoveProduct