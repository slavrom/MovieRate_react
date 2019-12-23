import React, { useState, useEffect, useRef } from 'react';
import MovieBar from '../MovieBar/MovieBar';
import './SearchStyle.css';

function Search() {
  const [state, setState] = useState({
    searchedMovies: [],
    searchText: ''
  });

  const ref = useRef();
  const { searchedMovies, searchText } = state;
  const url = `https://api.themoviedb.org/3/search/movie?query=${searchText}&api_key=6fea6800ad53c60d927efe6f58809c01`;

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => setState({ ...state, searchedMovies: res.results }))
      .catch(err => console.log(err));
  }, [ref.current]);

  function getSearchText(e) {
    setState({ ...state, searchText: e.target.value });
    ref.current = e.target.value;
  }

  return (
    <div>
      <div className='searchInput'>
        <input
          type='text'
          onChange={getSearchText}
          placeholder='Search Movie...'
        />
        <i className='fas fa-search' />
      </div>
      <div className='searchedMoviesList'>
        {searchedMovies &&
          searchedMovies.map((movie, index) => (
            <MovieBar key={index} movie={movie} index={index} />
          ))}
      </div>
    </div>
  );
}

export default Search;
