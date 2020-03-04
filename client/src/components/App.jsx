import React from 'react';
import MovieList from './MovieList';


const App = ({movies}) => (
  <div>
    <div>MovieList</div>
    <MovieList movies={movies}/>
  </div>
);

export default App;