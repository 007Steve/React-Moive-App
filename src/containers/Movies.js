import React, {Component} from 'react';
import { connect } from 'react-redux';
import MovieCard from '../components/MovieCard';
import './Movies.css';
import MovieForm from '../containers/MovieForm';
class Movies extends Component {
componentDidMount(){
    this.props.dispatch({
        type: 'GET_MOVIES_SUCCESS',
        movies: [{ title: "Mars", image: "https://m.media-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_.jpg", description: " lorem ips  fgggf", category: "sci-fi", year:"2015" }]
    })
}
    render(){
        return(
            <div className="Movie-Container">
              <h1>Movies component</h1>
                  {this.props.movies.map(movie => <MovieCard key={movie.id} movie={movie}/>
                )}
                <MovieForm/>
           </div> 
        )
    }
}
const mapStateToProps = (state) => {
    return ({
        movies: state.movies
    })
}

  export default connect(mapStateToProps)(Movies);