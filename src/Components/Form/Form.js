import axios from 'axios';
import React, {Component} from 'react';


export default class Form extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: '',
            price: 0,
            imgurl: '',
            currentProductId: this.props.currentProduct.id || null
        }
        this.baseState = this.state;
    }

    componentDidUpdate(prevProps, prevState){
        // if(this.props.currentProduct.id !== prevProps.currentProduct.id){
        //     this.fetchData(this.props.currentProduct);
        // }
        console.log(this.props.currentProduct)
        console.log(prevProps.currentProduct)
    }

    handleProductChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitProduct = () => {
        const {name, price, imgurl} = this.state;
        axios.post('/api/product', {name, price, imgurl})
        .then(res => this.props.didMount())
        .catch(err => console.log(err))
        this.resetForm()
    }

    handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
    }

    resetForm = () => {
        this.setState(() => this.baseState)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' value={this.state.name} placeholder='Product Name' 
                    name='name' onChange={this.handleProductChange}></input>
                    <input type='text' value={this.state.price} placeholder='Product Price' 
                    name='price' onChange={this.handleProductChange}></input>
                    <input type='text' value={this.state.imgurl} placeholder='Product Image URL' 
                    name='imgurl' onChange={this.handleProductChange}></input>
                    <button type='button' onClick={() => this.resetForm()}>Cancel</button>
                    <button type='submit' onClick={this.submitProduct}>Add To Inventory</button>
                </form>
            </div>
        )
    }
}