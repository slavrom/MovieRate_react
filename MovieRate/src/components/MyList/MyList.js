import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MovieBar from '../MovieBar/MovieBar';
import './MyListStyle.css'

function MyList () {
  const movieList = useSelector((state) => state);

  return (
    <div className='listStyle'>
      {movieList.map((movie, index) => (
        <MovieBar 
          key={movie.imdb_id}
          movie={movie}
          index={index}
        />
      ))}
    </div>
  )
}

export default MyList;