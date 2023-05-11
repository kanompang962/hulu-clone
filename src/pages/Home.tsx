import Billboard from "../components/Billboard";
import GenereMovieList from "../components/GenereMovieList";
import Header from "../components/Header";


const Home = () => {
    return (
        <div>
            <Header />
            <Billboard />
            <GenereMovieList />
        </div>
    )
}

export default Home;