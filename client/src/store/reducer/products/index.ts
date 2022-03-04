import {ProductsAction, ProductsActionEnum, ProductsState} from "./types";


const initialState: ProductsState = {
    products: []
}

const productReducer = (state = initialState, action: ProductsAction):ProductsState => {
    switch (action.type) {
        case ProductsActionEnum.ADD_PRODUCT:
            return {...state, products: action.payload}
        case ProductsActionEnum.REMOVE_PRODUCT:
            return {...state, products: state.products.filter(count => count.id !== action.payload.id),}
        default: return state
    }
}
export default productReducer