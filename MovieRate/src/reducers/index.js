import { ADD_TO_LIST, REMOVE_FROM_LIST, CHANGE_RATING } from '../actions';

const listOfMovies = [];

export default (state = listOfMovies, action) => {
  switch (action.type) {
    case ADD_TO_LIST:
      return [...state, action.payload];
    case REMOVE_FROM_LIST:
      return state.filter(movie => movie.id !== action.payload);
    case CHANGE_RATING:
      state.filter(movie => {
        if (movie.id === +action.payloadId) {
          return (movie.rating = action.payloadRating);
        }
      });
      return state;
    default:
      return state;
  }
};
