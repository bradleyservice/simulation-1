import axios from 'axios';
import React from 'react';
import Product from '../Product/Product';

const Dashboard = (props) => {

    let deleteProduct = (id) => {
        axios.delete(`/api/inventory/${id}`)
        .then(res => props.didMount())
    }
    
    const mappedProducts = props.inventory.map(product => {
        return <Product key={product.id} inventory={product} deleteProduct={deleteProduct}/>
    })

    
    return(
        <div>
            {mappedProducts}
        </div>
    )
}

export default Dashboard