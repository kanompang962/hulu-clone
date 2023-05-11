import axios from 'axios'

const movieBaseUrl = 'https://api.themoviedb.org/3/movie';
const movieByGenreBaseURL = 'https://api.themoviedb.org/3/movie/550?api_key=c861015c30371b33b60178f3334f285b';
const api_key = 'c861015c30371b33b60178f3334f285b'

// const getMovieP = async () => {
//     await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=c861015c30371b33b60178f3334f285b`)
//         .then()
//         .catch(err => console.log(err));
// }

const getPopularMovies = axios.get(movieBaseUrl + '/popular?api_key=' + api_key);
const getMovieByGenreId = (id: number) => axios.get(movieByGenreBaseURL + "&with_genres=" + id)


export default { getPopularMovies, getMovieByGenreId }