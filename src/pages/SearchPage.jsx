import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import EmptyListImg from '../assets/empty-movie-img.svg';
import SearchPageNavbar from '../ui/SearchPageNavbar';

const SearchPage = () => {

    const [movies, setMovies] = useState([]);

    async function fetchMovies() {
        const { data } = await axios.get("")

    }


    return (
        <>
            <div className="search-movie-banner-container">
                <div className="search-movie-banner">
                    <div className="banner-container">
                        <h1 className="search-movie-banner-title">
                            Search for a movie
                        </h1>
                    <div className="search-box-container">
                        <button className="search-button">
                        <FontAwesomeIcon className='search-glass' icon={faMagnifyingGlass} />
                        </button>
                    </div>
                    </div>
                </div>
            </div>
            <div className="movie-items-container">
                <div className="row movies-items-row">
                    <div className="movies-list">
                        {

                            // <div className="empty-list-image">
                            //     <img src={EmptyListImg} alt="" className='movie_empty_img' />
                            //     <h2 className='empty-list-subtitle'>Waiting for your search...</h2>
                            // </div>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default SearchPage;
