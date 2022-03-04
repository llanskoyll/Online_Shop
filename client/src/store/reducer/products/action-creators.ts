import {IProduct} from "../../../models/IProduct";
import {ProductsActionEnum, SetProduct, SetRemoveProduct} from "./types";
import {AppDispatch} from "../../index";
import axios from "axios";


export const ProductsActionCreators = {
    SetProduct: (payload: IProduct[]): SetProduct => ({type: ProductsActionEnum.ADD_PRODUCT, payload}),
    SetRemoveProduct: (payload: IProduct): SetRemoveProduct => ({type: ProductsActionEnum.REMOVE_PRODUCT, payload}),
    setAddProduct: () => async (dispatch: AppDispatch) => {
        try {
            setTimeout(async () => {
                const response = await axios.get<IProduct[]>('./product.json');
                dispatch(ProductsActionCreators.SetProduct(response.data))
                localStorage.setItem('products',JSON.stringify(response.data))
            },1000)
        }catch(e) {
            console.log(e)
        }
    }
}