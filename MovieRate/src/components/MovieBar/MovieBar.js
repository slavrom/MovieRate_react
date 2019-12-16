import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromList } from '../../actions';
import './MovieBarStyle.css'

function MovieBar({ movie, index }) {
  const dispatch = useDispatch();
  const deleteMovie = movie => dispatch(removeFromList(movie));
  const imgSrc = 'https://image.tmdb.org/t/p/original';

  return (
    <div className='rateBar'>
      <div className='movieBar'>
        <img
          src={movie.poster_path ? imgSrc + movie.poster_path : window.location.origin + '/poster.png'}
          className='imgStyle'
          alt="poster"
        />
        <p>{movie.title}</p>
        <p>{`${movie.rating}/10`}</p>
        <button onClick={() => deleteMovie(movie.id)}>Unrate</button>
      </div>
    </div>
  );
}

export default MovieBar;
