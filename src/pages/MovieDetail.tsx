

const MovieDetail = () => {
    return (
        <div className="
            flex 
            h-[100vh]
            items-center
            justify-center">
            <div className="
                flex 
                rounded-xl    
                overflow-hidden       
                bg-gray-300
                h-[550px]
                w-[350px]
                md:w-[750px]">
                <div className="
                   w-[50%]">
                    <img className="
                        w-[100%]
                        h-[100%]
                        object-cover"
                        src="https://static.vecteezy.com/system/resources/previews/005/502/524/original/cinema-background-concept-movie-theater-object-on-red-curtain-background-and-movie-time-with-electric-bulbs-frame-illustration-free-vector.jpg" />
                </div>
                <div className="
                    w-[50%]
                    text-black
                    p-8">
                    <h3 className="
                        text-[14px]
                        font-bold
                        ">PREVIEW</h3>
                    <h1>Movie Detail</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut aliquam minus voluptates odit vitae omnis maiores tempore,
                        explicabo ullam accusamus totam unde ipsa deleniti iusto officiis consequatur rem, tenetur nisi?
                    </p>
                    <p>
                        <span>10.20</span>
                        <span>5.4</span>
                    </p>
                    <div>
                        <button>Play</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetail