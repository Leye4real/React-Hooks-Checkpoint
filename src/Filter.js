import React from "react";



const Filter = ({titleprop, ratingprop, onTitleChange, onRatingChange}) =>{
    console.log(ratingprop)
    return (
        <div>
            <input placeholder="filter by Title" value={titleprop} onChange={onTitleChange} />
            <input placeholder="filter by rating" value={ratingprop} onChange={onRatingChange} />
        </div>
    )
}

export default Filter