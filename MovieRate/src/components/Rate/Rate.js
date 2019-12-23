import React, { useState, useEffect, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { addMovieToList } from '../../actions';
import { rateValue } from '../../assets/rate.js';
import './RateStyle.css';

function Rate() {
  const [movie, setMovie] = useState({});
  const [isThereMovie, setIsThereMovie] = useState(true);
  const [rating, setRating] = useState('');
  const dispatch = useDispatch();
  const addNewMovie = movie => dispatch(addMovieToList(movie));

  const imgSrc = 'https://image.tmdb.org/t/p/original';
  const randomMovie = Math.floor(Math.random() * (10000 - 2 + 1));
  const url = `https://api.themoviedb.org/3/movie/${randomMovie}?api_key=6fea6800ad53c60d927efe6f58809c01`;

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        setMovie(res);
        return res;
      })
      .then(res => movieHandler(res))
      .catch(err => console.log(err));
  }, [isThereMovie]);

  function movieHandler(res) {
    return res.status_code && setIsThereMovie(!isThereMovie);
  }

  function addMovie(e) {
    e.preventDefault();
    setMovie((movie.rating = rating));
    addNewMovie(movie);
    setIsThereMovie(!isThereMovie);
    setRating('');
  }

  function ratingHandler(e) {
    setRating(e.target.value);
  }

  function nextMovie() {
    setRating('');
    setIsThereMovie(!isThereMovie);
  }

  return (
    <div className='wrapperStyle'>
      <div className='movieRateBar'>
        <div>
          <img
            src={
              movie.poster_path
                ? imgSrc + movie.poster_path
                : window.location.origin + '/poster.png'
            }
            className='imgBlock'
            alt='poster'
          />
        </div>
        <div>
          <div>
            <p>
              <b>{movie.title}</b>
            </p>
            <p>{`Year: ${new Date(movie.release_date).getFullYear()}`}</p>
            <p>{movie.overview}</p>
          </div>
          <form onSubmit={addMovie}>
            {rateValue.map(i => (
              <React.Fragment key={i.value}>
                <input
                  type='radio'
                  id={i.value}
                  name='rate'
                  value={i.value}
                  checked={rating === i.value}
                  onChange={ratingHandler}
                  required
                />
                <label htmlFor={i.value}>{i.value}</label>
              </React.Fragment>
            ))}{' '}
            <button type='submit' className='btns edit'>
              Rate
            </button>
          </form>
        </div>
      </div>
      <button onClick={nextMovie} className='next btns'>
        Next
      </button>
    </div>
  );
}

export default Rate;
