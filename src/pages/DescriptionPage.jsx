import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Avengers from '../assets/avengers.jpg';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import Movie from '../ui/Movie';
import BottomHalf from '../ui/BottomHalf';
import Sidebar from '../Sidebar';


const DescriptionPage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchMovieDetails() {
        try {
            const { data } = await axios.get(`https://www.omdbapi.com/?apikey=34328269&i=${id}`);
            setMovie(data);
        } catch (error) {
            console.error('Error fetching movie details:', error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (id) {
            fetchMovieDetails();
        }
    }, [id]);

    useEffect(() => {
        console.log(movie);
    }, [movie])



    return (
        <>
        <div className="layout">
            <Sidebar />
            <div className="main-content">
                <div className='master-container'>
                    <div className="top-container">
                        <div className="image-box-container">
                            <img className="movie-image" src={movie.Poster} />
                        </div>
                        <div className="description-box-container">
                            <h1 className='description-movie-title'>{movie.Title}</h1>
                            <p className='description-information'><span className="description-date description">{movie.Released}</span> . <span className="description-movie-length description">{movie.Runtime}</span> . <span className="description-rating description">{movie.imdbRating}/10</span></p>
                            <h3 className="overview-title">Overview: </h3>
                            <p className="description-overview">{movie.Plot}</p>
                            <button disabled className="description-watch-btn">
                            <FontAwesomeIcon className="play-button" icon={faPlay} /> Watch
                            </button>
                        </div>
                    </div>
                    <div className="description-bottom-container">
                        <h2 className="bottom-container-title">Recommended Movies</h2>
                        <BottomHalf />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default DescriptionPage;
