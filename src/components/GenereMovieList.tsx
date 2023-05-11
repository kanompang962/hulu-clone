import GenresList from "../constants/GenresList"
import { IoChevronForwardSharp } from "react-icons/io5";
import MovieList from "./MovieList";

const GenereMovieList = () => {
    return (
        <div className="
            mt-24
            p-5
            px-10
            md:px-20">
            {GenresList.genere.map((item: any, index) => index <= 4 && (
                <div key={index} className="flex flex-col">
                    <div className="
                        flex 
                        flex-row 
                        justify-between 
                        items-end
                        ">
                        <h2 className="
                            text-[20px]
                            font-bold">
                            {item.name}
                        </h2>
                        <div onClick={() => console.log(item.id)}
                            className=" flex flex-row items-center gap-1">
                            <span className="
                                text-gray-400
                                text-[16px]
                                font-normal
                                cursor-pointer">
                                VIEW ALL
                            </span>
                            <IoChevronForwardSharp className="text-gray-400" />
                        </div>
                    </div>
                    <MovieList genreId={item.id} />
                </div>
            ))}
        </div>
    )
}

export default GenereMovieList