import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import MovieBar from '../MovieBar/MovieBar';
import { rateValue } from '../../assets/rate.js';
import Select from 'react-select';
import './MyListStyle.css';

function MyList() {
  const movieList = useSelector(state => state);
  const [moviesRating, setMoviesRating] = useState('all');

  const rating = rateValue.map(i => {
    return { ...i, label: i.value };
  });

  rating.unshift({ value: 'all', label: 'All' });

  const ratedMovies = movieList.filter(movie => {
    if (movie.rating === moviesRating) {
      return movie;
    }
  });

  const styles = {
    clearIndicator: provider => {
      return {
        ...provider
      };
    },
    container: provider => {
      return {
        borderRadius: '6px',
        cursor: 'pointer',
        ...provider
      };
    },
    control: provider => {
      return {
        ...provider,
        border: 'none',
        cursor: 'pointer',
        boxShadow: 'none',
        borderColor: 'inherit',
        backgroundColor: '#3a0e6d7a',
        borderRadius: '0px 0px 15px 0px'
      };
    },
    indicatorSeparator: provider => {
      return {
        ...provider,
        display: 'none'
      };
    },
    input: provider => {
      return {
        ...provider
      };
    },
    menu: provider => {
      return {
        ...provider,
        backgroundColor: '#8b58bf'
      };
    },
    option: provider => {
      return {
        ...provider,
        color: '#fff',
        cursor: 'pointer',
        backgroundColor: 'inherit',
        ':active': {
          backgroundColor: 'inherit'
        },
        ':hover': {
          backgroundColor: 'rgba(216,216,216,0.34)'
        }
      };
    },
    singleValue: provider => {
      return {
        ...provider,
        color: '#fff'
      };
    }
  };

  function handleMoviesRating(e) {
    setMoviesRating(e);
  }

  return (
    <div className='listWrapper'>
      <div className='selectStyle'>
        <Select
          defaultValue={rating[0]}
          options={rating}
          label='single select'
          styles={styles}
          onChange={i => handleMoviesRating(i.value)}
        />
      </div>
      <div className='listStyle'>
        {moviesRating !== 'all'
          ? ratedMovies.map((movie, index) => (
              <MovieBar key={movie.id} movie={movie} index={index} />
            ))
          : movieList.map((movie, index) => (
              <MovieBar key={movie.id} movie={movie} index={index} />
            ))}
      </div>
    </div>
  );
}

export default MyList;
