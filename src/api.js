const randomMovie = Math.floor(Math.random() * (10000 - 2 + 1));
const url = `https://api.themoviedb.org/3/movie/${randomMovie}?api_key=6fea6800ad53c60d927efe6f58809c01`;

export function loadMovieData() {
  const result = null;
  fetch(url)
    .then(res => res.json())
    .then(res => {result = res})
    .catch(err => console.log(err));
  return result;
}