import React, { Component } from 'react';
import Movies from './Constants/movies.js';

var movies = Movies.data1;
class App extends Component {

    render() {
        return (
            <div className="App">
            	{
            	movies.map(function(movie){
            		return (
            			<div key={movie.id}>
	            			<h2>{movie.name}</h2>
	            			<p>Year: {movie.year}</p>
            			</div>
            			)
            		})
            	}
            </div>
        );
    }
}
export default App;
