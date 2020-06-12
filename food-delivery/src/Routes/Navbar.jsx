import React from "react"

import {Link} from "react-router-dom"

function Navbar(){
    return(
       <div style={{display:"flex"}}>
       <Link style={{flex:1}} to="/">Home</Link>
       <Link style={{flex:1}} to="/product">Product</Link>
       <Link style={{flex:1}} to="/cart">Cart</Link>

       </div>
    )
}

export default Navbar