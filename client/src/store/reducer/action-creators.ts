import {UserActionCreators} from "./user/action-creators";
import {ProductsActionCreators} from "./products/action-creators";

export const allActionCreators = {
    ...UserActionCreators,
    ...ProductsActionCreators
}