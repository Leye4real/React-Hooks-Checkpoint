import React from "react";
import { useState } from "react";

const Form = ({addMovieprop}) => {

const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [posterURL, setPosterURL] = useState("");
const [rating, setRating] = useState("");

const handleSubmit = (e) =>{
    e.preventDefault();

const newMovie = {
    title: title,
    description: description,
    posterURL: posterURL,
    rating: Number(rating)
};

addMovieprop(newMovie)
setTitle("")
setDescription("")
setPosterURL("")
setRating("")


}

    return (
    <form onSubmit={handleSubmit}>
        <label>Title: 
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        </label>
        <br/>
        <label>Description:
        <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)}/>
        </label>
        <br/>
        <label>posterURL:
        <input type="text" value={posterURL} onChange={(e)=>setPosterURL(e.target.value)}/>
        </label>
        <br/>
        <label>Rating:
        <input type="number" value={rating} onChange={(e)=>setRating(e.target.value)}/>    
        </label>
        <br/>
        <button type="submit">Submit</button>

    </form>
    )
}

export default Form