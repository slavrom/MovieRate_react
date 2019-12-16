export const ADD_TO_LIST = 'ADD_TO_LIST';
export const REMOVE_FROM_LIST = 'REMOVE_ROM_LIST';

export const addMovieToList = (movie) => ({
  type: ADD_TO_LIST,
  payload: movie
});

export const removeFromList = (id) => ({
  type: REMOVE_FROM_LIST,
  payload: id
})