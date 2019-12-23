import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeFromList, changeRating, addMovieToList } from '../../actions';
import { rateValue } from '../../assets/rate.js';
import './MovieBarStyle.css';

function MovieBar({ movie, index }) {
  const [onEdit, setOnEdit] = useState(false);
  const [movieRating, setMovieRating] = useState('');
  const [movieId, setMovieId] = useState('');
  const dispatch = useDispatch();

  const deleteMovie = movie => dispatch(removeFromList(movie));
  const changeMovieRating = (rating, id) => dispatch(changeRating(rating, id));
  const addToList = movie => dispatch(addMovieToList(movie));

  const imgSrc = 'https://image.tmdb.org/t/p/original';
  const { poster_path, title, overview, id, rating, release_date } = movie;

  function myListRatingHandler(e) {
    setMovieRating(e.target.value);
    setMovieId(e.target.title);
  }

  function onSubmit(e) {
    e.preventDefault();
    {
      movie.rating ? changeMovieRating(movieRating, movieId) : addToList(movie);
      movie.rating = movieRating;
    }
    setOnEdit(false);
  }

  return (
    <div className='movieBar'>
      <img
        src={
          poster_path
            ? `${imgSrc}${poster_path}`
            : `${window.location.origin}/poster.png`
        }
        className={onEdit ? 'imgOnEdit' : 'imgStyle'}
        alt='poster'
      />
      <div>
        <p className='movieTitle'>
          <b>{title ? title : 'No title'}</b>
        </p>
        {onEdit && (
          <React.Fragment>
            <div>
              <p>{`Year: ${new Date(release_date).getFullYear()}`}</p>
              <p>{overview}</p>
            </div>
            <form onSubmit={onSubmit}>
              {rateValue.map(i => (
                <React.Fragment key={i.value}>
                  <input
                    type='radio'
                    id={i.value}
                    title={id}
                    name='rate'
                    value={i.value}
                    onClick={myListRatingHandler}
                    required
                  />
                  <label htmlFor={i.value}>{i.value}</label>
                </React.Fragment>
              ))}{' '}
              <button type='submit' className='btns edit'>
                Rate
              </button>
            </form>
            <button onClick={() => setOnEdit(false)} className='btns cancel'>
              Cancel
            </button>
          </React.Fragment>
        )}
      </div>
      {rating && <p className='score'>{`${rating}/10`}</p>}
      {!onEdit && (
        <div className={rating && 'editBtns'}>
          <button className='btns edit' onClick={() => setOnEdit(true)}>
            {rating ? 'Edit' : 'Rate'}
          </button>
          {rating && (
            <button className='btns unrate' onClick={() => deleteMovie(id)}>
              Remove
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default MovieBar;
