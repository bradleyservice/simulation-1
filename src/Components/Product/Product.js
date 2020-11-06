import React from 'react';

const Product = (props) => {
    

    return(
        <div>
            {props.inventory.name}
            {props.inventory.price}
            {props.inventory.imgurl}
            <button onClick={() => props.deleteProduct(props.inventory.id)}>Delete</button>
            <button>Edit</button>
        </div>
    )
}

export default Product