import { ADD_TO_LIST } from '../actions';
import { REMOVE_FROM_LIST } from '../actions';

const listOfMovies = [];

export default (state = listOfMovies, {type, payload}) => {
  switch(type) {
    case ADD_TO_LIST:
      return [...state, payload];
    case REMOVE_FROM_LIST:
      return state.filter(movie => movie.id !== payload);
    default:
      return state;
  }
}