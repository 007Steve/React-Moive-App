import React,{Component} from 'react';
import Movies from './Movies.js';
import './App.css';


class App extends Component {
  
  componentDidMount(){
    fetch("http://localhost:3000/movies")
    .then(response => response.json())
   
  }
  render() { 
    
    return ( <div className="App">
    <Movies />
    
  </div> );
  }
}
 
export default App ;

