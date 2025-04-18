import React from 'react';
import { Link } from 'react-router-dom';
import GuardiansGalaxy from '../assets/guadiansGalaxy.jpg';

const Movie = () => {
    return (
        <div className="container movies-container">
                        <div className="row movies-row">
                            <div className="movie-selection-wrapper" id="movies-list">
                                <div className="movie-box">
                                    <figure className="movie-image-wrapper">
                                        <img className="movie-image" src={GuardiansGalaxy} alt="Guardians of The Galaxy" />
                                        <div className="movie-box-links">
                                            <div className="info-container">
                                                <h4 className="hover-title">Guardians of The Galaxy Vol. 2</h4>
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
