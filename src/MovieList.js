import React from "react";
import MovieCards from "./MovieCards";


const MovieList = ({filmprop}) =>{
    return (
    <div>
        {
            filmprop.map((movie,index)=>{
                return <MovieCards movieprop={movie} key={index} />
            })
        }
    </div>    
    )
}


export default MovieList