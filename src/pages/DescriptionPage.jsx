import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Avengers from '../assets/avengers.jpg';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import Movie from '../ui/Movie';
import BottomHalf from '../ui/BottomHalf';
import Sidebar from '../Sidebar';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


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
                                {loading ? (
                                    <Skeleton height={400} width={300} />
                                ) : (
                                    <img className="movie-image" src={movie.Poster} alt={movie.Title} />
                                )}
                            </div>
                            <div className="description-box-container">
                                {loading ? (
                                    <>
                                        <Skeleton height={40} width={300} />
                                        <Skeleton height={20} width={200} style={{ marginTop: '16px' }} />
                                        <Skeleton height={24} width={100} style={{ marginTop: '24px' }} />
                                        <Skeleton height={100} style={{ marginTop: '16px' }} />
                                        <Skeleton height={40} width={120} style={{ marginTop: '24px' }} />
                                    </>
                                ) : (
                                    <>
                                        <h1 className='description-movie-title'>{movie.Title}</h1>
                                        <p className='description-information'>
                                            <span className="description-date description">{movie.Released}</span> . 
                                            <span className="description-movie-length description">{movie.Runtime}</span> . 
                                            <span className="description-rating description">{movie.imdbRating}/10</span>
                                        </p>
                                        <h3 className="overview-title">Overview: </h3>
                                        <p className="description-overview">{movie.Plot}</p>
                                        <button disabled className="description-watch-btn">
                                            <FontAwesomeIcon className="play-button" icon={faPlay} /> Watch
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className="description-bottom-container">
                            <h2 className="bottom-container-title">Recommended Movies</h2>
                            {loading ? (
                                <div style={{ display: 'flex', gap: '20px' }}>
                                    {[...Array(4)].map((_, index) => (
                                        <Skeleton key={index} height={300} width={200} />
                                    ))}
                                </div>
                            ) : (
                                <BottomHalf />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DescriptionPage;
