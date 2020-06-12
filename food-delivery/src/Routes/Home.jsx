import React from "react"
import { connect } from "react-redux"
import Item from "../Components/item"

const Home = ({products}) => {
    console.log(products)
    return <div>
        {" "}
        {products?.map(item =><div key={item.id}>
            {" "}
            <Item data={item} />
            </div>)}
    </div>
}

const mapStateToprops=state=>({
    products: state.productsArr
})

export default connect(mapStateToprops)(Home)