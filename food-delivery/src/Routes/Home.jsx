import React from "react"
import { connect } from "react-redux"
import Item from "../Components/item"
import { addToCart } from "../redux/action"

const Home = ({ products, addToCart }) => {
    console.log(products)
    return <div>
        {" "}
        {products?.map(item => <div key={item.id}>
            {" "}
            <Item
                data={item}
                onClickHandler={addToCart}
                buttonLabel="ADD TO CART"
            />
        </div>)}
    </div>
}

const mapStateToprops = state => ({
    products: state.productsArr
})

const mapDispatchToProps = dispatch => ({
    addToCart: (id) => dispatch(addToCart(id))
})

export default connect(
    mapStateToprops,
    mapDispatchToProps
)(Home)