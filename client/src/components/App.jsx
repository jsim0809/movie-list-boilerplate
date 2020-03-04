import React from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: props.movies
    };
  }

  render() {
    return (
      <div>
        <h3>MovieList</h3>
        <SearchBar />
        <MovieList movies={this.props.movies}/>
      </div>
    );
  }
};

export default App;