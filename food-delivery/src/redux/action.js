import {ADD_PRODUCT,ADD_TO_CART,REMOVE_FROM_CART } from "./actionTypes"


export const addProduct=payload=>({
    type:ADD_PRODUCT,
    payload

})


export const addToCart=payload=>({
    type:ADD_TO_CART,
    payload
})



export const removeFromCart=payload=>({
    type:REMOVE_FROM_CART,
    payload
})

