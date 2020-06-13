import React from "react"

import {Switch,Route} from "react-router-dom"
import Home from "./Home"
import {Product} from "./Product"
import Cart from "./Cart"

function Routes(){
    return(
        <Switch>
            <Route path="/" exact render={()=> <Home /> }/>
            <Route path="/product" render={()=> <Product/> }/>
            <Route path="/cart" render={()=> <Cart/> }/>
        </Switch>
    )
}

export default Routes