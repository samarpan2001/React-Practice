import React, { Component } from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list.component'

class App extends Component{
  constructor(){
    super();
    this.state={
      books:[]
    };
  }
  /*It is a lifecycle meethod
  The below is a promise that is being resolved  */
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({books:users}));
  }

  render(){
  /*For the item card list, the name is props and props.child is anyting in betweem the cardlist component */
  return (
    <div className="App">
    <CardList books={this.state.books}/ > 
      
    
      
    </div>
  );
  }
  }
 

export default App;
 