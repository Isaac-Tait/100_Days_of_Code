import React from "react"

function Product(props) {
    return (
        <div>
            <h3>You will need: </h3> <h1 className="h1">{props.name}</h1>
        
            <h3>The price is:</h3> <h3 className="price">${props.price.toFixed(2)}</h3>
            
            <p>Product description: {props.description}</p>
            <hr />
        </div>
    )
}

export default Product