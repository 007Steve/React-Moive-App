import React, {Component} from 'react';
import { connect } from 'react-redux';
import MovieCard from '../components/MovieCard';
import './Movies.css';
import MovieForm from '../containers/MovieForm';
import { getMovies } from '../actions/movies'
class Movies extends Component {


    componentDidMount(){
    this.props.getMovies()
        
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

  export default connect(mapStateToProps,{getMovies})(Movies);