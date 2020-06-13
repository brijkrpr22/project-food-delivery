import React from "react"
import {connect} from "react-redux"
import Item  from "../Components/item"

 const Cart=({cart})=>{
     console.log(cart)
  return ( 
  <div>
      {" "}
      {cart?.map(item => 
      <Item key={item.id} data={item} onClickHandler={()=>{} }
       /> )}
  </div>
      )
};


const mapStateToprops = state => ({
    cart: state.cartItems
});

 {/* const mapDispatchToProps = dispatch => ({
    addToCart: (id) => dispatch(addToCart(id))
}) */}

export default connect(
    mapStateToprops,
    // mapDispatchToProps
    null
)(Cart) 