import React from "react"
import { addToCart } from "../redux/action"

export default function Item({data,onClickHandler}){
    return(
        <div style={{display:"flex",border:"1px solid black",marginTop:"10px"}} >
   
    <div style={{flex: 1}}>{data.product_name}</div>
    <div style={{flex: 1}}>{data.price}</div>
    <button onClick={()=> {onClickHandler(data.id) }}>ADD TO CART</button>
        </div>
    )
}