import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeFromList, changeRating, addMovieToList } from '../../actions';
import { rateValue } from '../../assets/rate.js';
import './MovieBarStyle.css';

function MovieBar({ movie }) {
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
    setMovieId(e.target.pattern);
  }

  function onSubmit(e) {
    e.preventDefault();
    {
      movie.rating ? changeMovieRating(movieRating, movieId) : addToList(movie);
      movie.rating = movieRating;
    }
    setOnEdit(false);
  }

  function viewMovie(id) {
    window.open(`https://www.themoviedb.org/movie/${id}`, '_blank');
  }

  function showScore(rating) {
    if (rating <= 4) {
      return 'badScore';
    } else if (rating <= 7) {
      return 'normalScore';
    } else {
      return 'bestScore';
    }
  }

  function showOnEditBar(i) {
    if (i === true) {
      return 'movieBarOnEdit movieBar';
    } else {
      return 'movieBar';
    }
  }

  return (
    <div className={showOnEditBar(onEdit)}>
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
            <div className='infoOnEdit'>
              <p>{`Year: ${new Date(release_date).getFullYear()}`}</p>
              <p>{overview}</p>
            </div>
            <form className='rateForm' onSubmit={onSubmit}>
              <div className='starsBar'>
                <div className='ratePoints'>
                  {rateValue.map(i => (
                    <React.Fragment key={i.value}>
                      <label htmlFor={i.value}>{i.value}</label>
                    </React.Fragment>
                  ))}
                </div>
                <span className='star-rating'>
                  {rateValue.map(i => (
                    <React.Fragment key={i.value}>
                      <input
                        type='radio'
                        id={i.value}
                        name='rate'
                        value={i.value}
                        onChange={myListRatingHandler}
                        required
                      />
                      <i></i>
                    </React.Fragment>
                  ))}
                </span>
              </div>
              <div>
                <button type='submit' className='btns edit rateBtn'>
                  Rate
                </button>
                <button
                  onClick={() => setOnEdit(false)}
                  className='btns cancel'
                >
                  Cancel
                </button>
              </div>
            </form>
          </React.Fragment>
        )}
      </div>
      {rating && <p className={showScore(rating)}>{`${rating}/10`}</p>}
      {!onEdit && (
        <div className={rating ? 'editRatingBtns' : 'editBtns'}>
          <button className='btns edit' onClick={() => setOnEdit(true)}>
            {rating ? 'Edit' : 'Rate'}
          </button>
          <button className='btns view' onClick={() => viewMovie(id)}>
            View
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
