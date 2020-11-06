import axios from 'axios';
import React, {Component} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header'

export default class App extends Component {
  constructor(){
    super()

    this.state = {
      inventory: [],
      currentProduct: {}
    }
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount(){
    axios.get('/api/inventory')
    .then(res => {
      this.setState({
        inventory: res.data
      })
    })
  }
  
  render(){
    return (
      <div className="App">
        <Dashboard didMount={this.componentDidMount} inventory={this.state.inventory} />
        <Form didMount={this.componentDidMount} currentProduct={this.state.currentProduct}/>
        <Header />
      </div>
    );
  }
}

