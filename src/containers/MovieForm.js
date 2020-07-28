import React, { Component } from 'react';
class MovieForm extends Component {
    state = {  }
    render() { 
        return (
         <div>
             <h2>Add a Movie</h2>
            <form>
                <label>Title</label>
                <input/>
                <label>Image</label>
                <input/>
                <label>Description</label>
                <input/>
                <label>Category</label>
                <input/>
                <label>Year</label>
                <input/>
                
            </form>
        </div> );
    }
}
 
export default MovieForm;