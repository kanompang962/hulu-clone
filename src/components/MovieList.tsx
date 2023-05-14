import { useEffect, useRef, useState } from 'react'
import useMovie from '../hooks/useMovie';
import GlobalKey from '../services/GlobalKey';
import { IoChevronBackOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';


const MovieList = (genreId: any) => {

    const elementRef = useRef(null);
    const [movieList, setMovieList] = useState<any>([]);

    useEffect(() => {
        getMovieListByGenreId();
    }, []);

    const getMovieListByGenreId = () => {
        useMovie.getMovieByGenreId(genreId.genreId).then((res: any) => {
            setMovieList(res.data.results);
            console.log(movieList);
        });
    }

    const slideRight = (element: any) => {
        element.scrollLeft += 500;
    }
    const slideLeft = (element: any) => {
        element.scrollLeft -= 500;
    }

    return (
        <div className="flex flex-row items-center" onClick={() => console.log(genreId)} >
            <IoChevronBackOutline onClick={() => slideLeft(elementRef.current)}
                className="
                text-white
                text-[40px]
                mb-[120px]
                p-2
                z-10
                bg-black
                rounded-full
                hidden
                md:block
                cursor-pointer" />
            <div id='slider'
                ref={elementRef}
                className='
                w-full
                mb-16 ml-[-20px] mr-[-20px]
                overflow-hidden
                overflow-x-hidden
                scroll-smooth
                whitespace-nowrap 
                '>
                {movieList.map((item: any, index: any) => index < 7 && (
                    <Link key={item.id} to={'/movieDetail'}>
                        <div onClick={() => console.log(item.title)}
                            className='
                            group
                            inline-block
                            m-2
                            md:m-3
                            cursor-pointer'>
                            <img className='
                                w-[230px]
                                md:w-[340px]
                                object-cover
                                rounded-2xl
                                group-hover:border-[5px]
                                border-gray-400
                                p-2
                                ransition-all 
                                duration-300 
                                ease-in-out'
                                src={GlobalKey.IMAGE_BASE_URL + item.backdrop_path}
                            />
                            <h2 className='
                                text-gray-400 
                                mt-2 
                                text-[12px] 
                                md:text-[17px] 
                                font-bold'>
                                {item.id % 2 == 0 ? 'WATCH MOVIE' : 'START WATCHING'}
                            </h2>
                            <h2 className='
                                text-white 
                                mt-1 
                                transition-all 
                                md:text-[22px] 
                                group-hover:font-bold'>
                                {item.original_title.length > 30
                                    ? item.original_title.substring(0, 30) + ' ...'
                                    : item.original_title
                                }
                            </h2>
                        </div>
                    </Link>
                ))}
            </div>
            <IoChevronBackOutline onClick={() => slideRight(elementRef.current)}
                className="
                text-white
                text-[40px]
                mb-[120px]
                p-2
                z-10
                bg-black
                rounded-full
                hidden
                rotate-180
                md:block
                cursor-pointer" />
            <div></div>
        </div>
    )
}

export default MovieList;