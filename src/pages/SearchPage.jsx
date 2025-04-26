import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import EmptyListImg from '../assets/empty-movie-img.svg';
import SearchPageNavbar from '../ui/SearchPageNavbar';
import axios from 'axios';
import Movie from '../ui/Movie';
import { useSearchParams } from 'react-router-dom';

const SearchPage = () => {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false)

    // async function fetchMovies(query) {
    //     const { data } = await axios.get(`https://www.omdbapi.com/?apikey=34328269&s=${query}`)
    //     const moviesData = data.Search
    //     // console.log(moviesData)
    //     setMovies(moviesData)
    // }

    // useEffect(() => {
    //     fetchMovies();
    // }, []);

    const [searchParams] = useSearchParams();
    const searchValue = searchParams.get('search');

    async function fetchMovies() {
        try {
            const { data } = await axios.get(`https://www.omdbapi.com/?apikey=34328269&s=${searchValue}`);
            if (data.Search) {
                setMovies(data.Search);
            }
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    }

    useEffect(() => {
        if (searchValue) {
            fetchMovies();
        }
    }, [searchValue]);


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
                            movies.length > 0 ? 
                            movies.slice(0, 6).map((movie) => <Movie movie={movie} key={movie.imdbID}/>)
                            :
                            <div className="empty-list-image">
                                <img src={EmptyListImg} alt="" className='movie_empty_img' />
                                <h2 className='empty-list-subtitle'>Waiting for your search...</h2>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default SearchPage;
