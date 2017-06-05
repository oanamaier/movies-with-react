import React, { Component } from 'react';
import Movies from './Constants/movies.js';
import './App.css';

var movies = Movies.data1;
 class App extends Component {

    render() {
    	
        return (
        	<div className="container">
	        	<div>
	        		<h1>Movies with React</h1>
	        	</div>
	        	<div>
	        		<h2>List of Movies</h2>
	        	</div>
	            <div className="app">
	            	<div className="row">
		            	<div className="col-md-6">
		            		<form>
					            <h3>Looking for a specific movie?</h3>
					            <input type="text" placeholder="Search.." />
				            </form>
		            	</div>
		            </div>
		            	{
		            	movies.map(function(movie, index){
		            		//movies.filter(searchingFor(term)).map(function(movie, index){
		            		return (
		            		<div className="row">
		  
			            		<div className="col-md-6">
			            			<div className="list" key={index}>
				            			<span>{movie.name}</span>
				            			<p>Year: {movie.year}</p>
			            			</div>
			            		</div>
			            		
		            		</div>
		            			
		            			);
		            		})
		            	}
	            </div>
	        </div>
        );
    }
}
export default App;
