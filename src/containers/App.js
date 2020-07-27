import React from 'react';
import Movies from './Movies.js'
import './App.css';
const movies = [
  {
    id: "1",
    title: "lion king",
    image: "https://lumiere-a.akamaihd.net/v1/images/b_thelionking2019_header_poststreet_mobile_18276_8dd5ba33.jpeg?region=0,0,640,430",
    length:"1"
  },
  {
    id: "2",
    title: "hamiltion",
    image: "https://www.theatermania.com/dyn/graphics/theatermania/v2w2400/hamilton-logo-85066.jpeg",
    length:"2"
  },
  {
    id: "3",
    title: "space movies",
    image: "https://images-na.ssl-images-amazon.com/images/I/814WU+gsXTL._RI_.jpg",
    length:"145"
  }
]
 




function App() {
  return (
    <div className="App">
      <Movies movies={movies}/>
      
    </div>
  );
}

export default App;
