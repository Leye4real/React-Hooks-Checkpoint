import React from "react";
import Card from 'react-bootstrap/Card'


const MovieCards = ({movieprop}) =>{
    return (
    <Card>
       <Card.Body>
        <Card.Title><h2>{movieprop.title}</h2></Card.Title>
        <Card.Text><strong>Description:</strong> {movieprop.description}</Card.Text>
        <iframe width="560" height="315" src={movieprop.posterURL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <Card.Text><strong>{movieprop.rating}</strong></Card.Text>
       </Card.Body>
    </Card>
    )
}


export default MovieCards