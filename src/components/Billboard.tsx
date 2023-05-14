import { useEffect, useState } from 'react'
import useMovie from '../hooks/useMovie';
import { Link } from 'react-router-dom';

const Billboard = () => {

    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
    const [movieBillboard, setMovieBillboard] = useState<any>([]);

    useEffect(() => {
        getPopularMovies();
    }, [])

    const getPopularMovies = () => {
        useMovie.getMovieBillboard.then((res: any) => {
            const data = res.data.results;
            setMovieBillboard(data[1]);
        });
    }



    return (
        <div>
            <div className='
                w-full
                absolute 
                h-[85vh]
                bg-gradient-to-t 
                from-[#1e2126]
                via-transparent
                to-transparent'>
            </div>

            <div className='
                absolute
                mt-[400px] 
                md:mt[350px]
                px-10 
                md:px-24'>
                <h2 className='
                    text-[19px]
                    lg:text-[27px]'>
                    Watch only on HULU
                </h2>
                <h2 className='
                    text-[36px]
                    lg:text-[47px]
                    font-bold'>
                    {movieBillboard.original_title}
                </h2>
                <div className='flex flex-row gap-3'>

                    <Link to={'movieDetail'}>
                        <button className='
                        rounded-lg
                        text-white
                        hover:border-gray-300
                        hover:text-gray-300
                        border-black
                        px-6 md:px-8
                        py-2 md:py-4
                        w-auto
                        text-sm lg:text-lg
                        font-semibold
                        flex
                        flex-row
                        items-center'>
                            PLAY
                        </button>
                    </Link>
                    <button className='
                        bg-transparent
                        border-white
                        hover:border-gray-300
                        hover:text-gray-300
                        rounded-lg
                        px-6 md:px-8
                        py-2 md:py-4
                        w-auto
                        text-sm lg:text-lg
                        font-semibold
                        flex
                        flex-row
                        items-center'>
                        DETAILS
                    </button>
                </div>
            </div>

            <img className='w-full h-[85vh] object-cover'
                src={IMAGE_BASE_URL + movieBillboard.backdrop_path} />
        </div>
    )
}

export default Billboard;