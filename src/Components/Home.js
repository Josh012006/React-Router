import { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import movies from '../movies';


function Home() {

    const [title, setTitle] = useState('');
    const [rating, setRating] = useState('');


    const usedMovies = movies.filter(
        j => {
            const object = JSON.parse(j);

            if(title !== '' || rating !== '' ) {
                return (object.title.toLowerCase().includes(title.toLowerCase()) && object.rating > Number(rating));
            }
            return true;
        }
    );


    return (
        <div className="App">
            <Filter Title = {title} Rating = {rating} SetTitle = {setTitle} SetRating = {setRating}></Filter>
            <div className='container'>
                <div className='row'>
                    <MovieList MoviesTable = {usedMovies} className = "row"></MovieList>
                </div>
            </div>
        </div>
    );
}

export default Home;