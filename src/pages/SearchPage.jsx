import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import EmptyListImg from '../assets/empty-movie-img.svg';
import SearchPageNavbar from '../ui/SearchPageNavbar';
import axios from 'axios';
import Movie from '../ui/Movie';
import { useSearchParams } from 'react-router-dom';
import Sidebar from '../Sidebar';
import DynamicMovies from '../ui/DynamicMovies';

const SearchPage = () => {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false)

    const handleSearch = async () => {
        setLoading(true);
        try {
            await fetchMovies(); // your existing fetch function
        } finally {
            setLoading(false);
        }
    };


    const [searchParams] = useSearchParams();
    const searchValue = searchParams.get('search');

    async function fetchMovies() {
        try {
            setLoading(true);
            const { data } = await axios.get(`https://www.omdbapi.com/?apikey=34328269&s=${searchValue}`);
            if (data.Search) {
                setMovies(data.Search);
            }
        } catch (error) {
            console.error('Error fetching movies:', error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (searchValue) {
            fetchMovies();
        }
    }, [searchValue]);


    return (
        <>
        <div className="layout">
            <Sidebar />
            <div className="main-content">
                <div className="search-movie-banner-container">
                    <div className="search-movie-banner">
                        <div className="banner-container">
                            <h1 className="search-movie-banner-title">
                                Search for a movie
                            </h1>
                        <div className="search-box-container">
                            <button  
                            onClick={handleSearch}
                            className="search-button">
                                <FontAwesomeIcon className='search-glass' icon={faMagnifyingGlass} />
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="movie-items-container">
                    <div className="row movies-items-row">
                        <div className="searchpage-movies-list">
                            {loading ? (
                                        <svg 
                                            className="loading-spinner fa-spin"
                                            xmlns="http://www.w3.org/2000/svg" 
                                            viewBox="0 0 512 512"
                                            fill="crimson"  // Add this line
                                        >
                                            <path d="M386.3 160L336 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0s-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3s163.8-62.5 226.3 0L386.3 160z"/>
                                        </svg>
                                ) : movies.length > 0 ? (
                                    movies.slice(0, 6).map((movie) => (
                                        <DynamicMovies movie={movie} key={movie.imdbID}/>
                                    ))
                                ) : (
                                    <div className="empty-list-image">
                                        <img src={EmptyListImg} alt="" className='movie_empty_img' />
                                        <h2 className='empty-list-subtitle'>Waiting for your search...</h2>
                                    </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default SearchPage;
