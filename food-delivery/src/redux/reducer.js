import { ADD_PRODUCT, ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes"
import data from "../utils/productData.json"
const initState={
    productsArr: [...data],
    cartItems:[]
}

const reducer = (state =initState, { type, payload }) => {
// console.log(payload)
console.log(state)
    switch (type) {
        case ADD_PRODUCT:
            return { 
                ...state
            }
        case ADD_TO_CART:
            const item=state.productsArr.find(item=>item.id===payload)
            return {
                ...state,
                cartItems:[...state.cartItems,item]
            }
        case REMOVE_FROM_CART:
            return {
                ...state
            }

        default:
            return state
    }
}

export default reducer
