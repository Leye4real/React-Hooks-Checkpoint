import './App.css';
import MovieList from './MovieList';
import Filter from './Filter';
import { useState } from 'react';
import Form from './Form';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieDescription from './MovieDescription';

const movies = [{
  id: 1,
  title:"Tom & Jerry", 
  description:"Temidayo, Did you know that there are only 25 classic Tom & Jerry episodes that were displayed in a widescreen CinemaScope from the 1950s? Enjoy a compilation filled with some of the best moments from these full screen episodes!", 
  posterURL:"https://wallpapers.com/images/hd/classic-tom-and-jerry-cartoon-icon-0ae93vofg4o9w1b0.jpg",
  trailerLink:"https://www.youtube.com/embed/t0Q2otsqC4I", 
  rating: 8
},
{
  id: 2,
  title:"The Greatest Fights In The Animal Kingdom", 
  description:"Watch as monkeys, guanacos and kangaroos all go head-to-head in our greatest animal fights! For family or territory, these determined animals won't go down without a fight.", 
  posterURL:"https://i.ytimg.com/vi/Ss5S3yiGxg8/maxresdefault.jpg",
  trailerLink:"https://www.youtube.com/embed/Ss5S3yiGxg8", 
  rating: 6
},
{
  id: 3,
  title:"Legend of the Seeker", 
  description:"Legend of the Seeker - Millions of readers over the world have been held spellbound by this valiant tale vividly told. Now, enter Terry Goodkind's world, the world of The Sword of Truth. In the aftermath of the brutal murder of his father, a mysterious woman, Kahlan Amnell, appears in Richard Cypher's forest sanctuary seeking help... and more. His world, his very beliefs, are shattered when ancient debts come due with thundering violence. In their darkest hour, hunted relentlessly, tormented by treachery and loss, Kahlan calls upon Richard to reach beyond his sword-to invoke within himself something more noble. Neither knows that the rules of battle have just changed... or that their time has run out. This is the beginning. One story. One Rule. Witness the birth of a legend.", 
  posterURL:"https://cdn1.edgedatg.com/aws/v2/abc/LegendoftheSeeker/showimages/0eb4fafbb4c88321b7138e28fcf51b9a/1600x900-Q90_0eb4fafbb4c88321b7138e28fcf51b9a.jpg",
  trailerLink:"https://www.youtube.com/embed/cVKCNmSfayw", 
  rating: 10
},
{
  id: 4,
  title:"The WOMAN KING", 
  description:" In this video, we're taking a look at the new release WOMAN KING 2022 movie. Woman King 2022 is a fascinating and eye-opening movie that you don't want to miss! WOMAN KING 2022 is a new release movie that sheds light on the true story of a woman who fought for her right to lead her country in the year 2022. This movie is an intriguing and captivating.!", 
  posterURL:"https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/thewomanking_onesheet_1400x2100_est.jpg?itok=Tm2Mq2st",
  trailerLink:"https://www.youtube.com/embed/OqH3YCkOqOo", 
  rating: 7
},
{
  id: 5,
  title:"Eleshin Oba", 
  description:"A thrilling story with a robust mix of romance, suspense, and drama. Enjoy this very educational and entertaining drama movie is based on real-life events in Nigeria in 1943, Elesin Oba will feature in the prestigious Special Presentation category, the first Yoruba language film to do so. Set in the Oyo Empire, between sunset and sunrise, the King’s horseman, Elesin Oba, must commit ritual suicide to follow his deceased king into the afterlife. His best intentions are derailed by his sexual desires, which leads to catastrophic consequences and ends in a deadly clash with the British rulers of the day. The horseman is unable to fulfill his ultimate commitment to the king, leaving his spirit to roam the earth, spelling doom for the land and its people.", 
  posterURL:"https://i0.wp.com/www.plat4om.com/wp-content/uploads/2022/11/maxresdefault-5-e1667836895320.jpg?fit=1270%2C467&ssl=1",
  trailerLink:"https://www.youtube.com/embed/jOT0YUaPEGk", 
  rating: 5
},
] 

function App() {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [film, setFilm] = useState(movies);

const titleChange = (e) => {
setTitle(e.target.value);
};

const ratingChange = (e) => {
  setRating(e.target.value);
}

const filteredMovies = film.filter((movie)=>{
  return movie.title.toLowerCase().includes(title.toLowerCase()) && (rating==="" || movie.rating === Number(rating))
})

const addMovie = (newMovie) =>{
setFilm([...film, newMovie])
}

  return (
    <div className="App">
      <h1>Movie App</h1>
    <Form addMovieprop={addMovie}/>
    <Filter titleprop={title} ratingprop={rating} onTitleChange={titleChange} onRatingChange={ratingChange} />
    {/* <Router> */}
        <Routes>
          <Route
            path="/"
            element={<MovieList filmprop={filteredMovies} />}
          />
          <Route
            path="/movies/:id"
            element={<MovieDescription movies={filteredMovies} />}
          />
        </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
