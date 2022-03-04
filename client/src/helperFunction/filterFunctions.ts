import {getArrayProduct} from "./getArrayProduct";
import {IProduct} from "../models/IProduct";

export const MostDownload = ():IProduct[] => {
    const array = getArrayProduct().sort((a:any,b:any) => a.downloads > b.downloads ? -1 : 1)
    const stack: IProduct[] = []
    for (let i = 0; i < array.length; i++) {
        if(stack.length < 3) {
            stack.push(array[i])
        }
    }
    return stack
}
export const MostRating = ():IProduct[] => {
    const array = getArrayProduct().sort((a:any,b:any) => a.star > b.star ? -1 : 1)
    const stack: IProduct[] = []
    for (let i = 0; i < array.length; i++) {
        if(stack.length < 3) {
            stack.push(array[i])
        }
    }
    return stack
}
