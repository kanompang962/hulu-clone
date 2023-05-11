import axios from "axios";
import GlobalKey from "../services/GlobalKey";

const getMovieBillboard = axios.get(`${GlobalKey.movieBaseUrl}/popular?api_key=${GlobalKey.api_key}`);

const getMovieByGenreId = async (id: number) => await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=c861015c30371b33b60178f3334f285b&with_genres=${id}`);

export default { getMovieBillboard, getMovieByGenreId };