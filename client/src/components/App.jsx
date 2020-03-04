import React from 'react';
import MovieList from './MovieList';


const App = ({movies}) => (
  <div>
    <h3>MovieList</h3>
    <MovieList movies={movies}/>
  </div>
);

export default App;