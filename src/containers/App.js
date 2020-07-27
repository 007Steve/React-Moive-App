import React,{Component} from 'react';
import Movies from './Movies.js';
import './App.css';


class App extends Component {
  constructor(props){
    super(props)
  
    this.state = { 
      movies:[]
    }
  }
  componentDidMount(){
    fetch("http://localhost:3000/movies")
    .then(response => response.json())
    .then(movies => this.setState({movies}))
  }
  render() { 
    
    return ( <div className="App">
    <Movies movies={this.state.movies}/>
    
  </div> );
  }
}
 
export default App ;

