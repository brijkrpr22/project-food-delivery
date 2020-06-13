import React from "react"
import { connect } from "react-redux"
import { addProduct } from "../redux/action"

class Product extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            product_name: "",
            price: ""
        }
    }

    render() {
        const { product_name, price } = this.state
        const { addProduct } = this.props
        return <div>
            Product:<input
                value={product_name}
                name={product_name}
                placeholder="name"
                type="text"
                onChange={e => this.setState({ product_name: e.target.value })}
            />
            <br />
            Price: <input
                value={price}
                name={price}
                placeholder="price"
                type="number" onChange={e => this.setState({ price: e.target.value })}
            />
            <button onClick={() => addProduct(this.state)}>Add Product </button>
        </div>
    }

}

const mapDispatchToProps = dispatch => ({
    addProduct: payload => dispatch(addProduct(payload))
})

export default connect(
    null,
    mapDispatchToProps
)(Product) 
