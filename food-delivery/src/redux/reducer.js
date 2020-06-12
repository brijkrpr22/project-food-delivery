import { ADD_PRODUCT, ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes"

// const initState{

// }

const reducer = (state =initState, { type, payload }) => {

    switch (type) {
        case ADD_PRODUCT:
            return {
                ...state
            }
        case ADD_TO_CART:
            return {
                ...state
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
