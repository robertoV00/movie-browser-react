import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import GuardiansGalaxy from '../assets/guadiansGalaxy.jpg';
import axios from 'axios';

const Movie = ({movie}) => {

    console.log(movie)

    useEffect(() => {
        axios.get("https://www.omdbapi.com/?apikey=34328269&s=avengers")
    }, [])

    return (
        <div className="container movies-container">
                        <div className="row movies-row">
                            <div className="movie-selection-wrapper" id="movies-list">
                                <div className="movie-box">
                                    <figure className="movie-image-wrapper">
                                        <img className="movie-image" src={movie.Poster} alt={movie.Title} />
                                        <div className="movie-box-links">
                                            <div className="info-container">
                                                <h4 className="hover-title">{movie.Title}</h4>
                                                <div className="find-more-btn-container">
                                                <Link to="/movie/guardians" className='find-more-btn'>Find Out More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
    );
}

export default Movie;
