import React from "react";
import Card from 'react-bootstrap/Card'


const MovieCards = ({movieprop}) =>{
const {title, description, posterURL, rating} = movieprop
    return (
    <div className="d-flex card">
    <Card>
       <Card.Body>
        <Card.Title><h2>{title}</h2></Card.Title>
        <Card.Text><strong>Description:</strong> {description}</Card.Text>
        <img src={posterURL} width="200px" />
        <Card.Text><strong>{rating}</strong></Card.Text>
       </Card.Body>
    </Card>
    </div>
    )
}


export default MovieCards