import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import GuardiansGalaxy from "../assets/guadiansGalaxy.jpg"
import Avengers from "../assets/avengers.jpg"
import SpidermanHomecoming from "../assets/homecoming.jpg"
import Minions from "../assets/minions.jpg"
import Spiderverse from "../assets/spiderverse.jpg"
import Nope from "../assets/nope.jpg"
import { Link } from 'react-router-dom';


const BottomHalf = () => {

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
            <section id="bottom-half">
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
                                        <Link to="/movie/tt3896198" className='find-more-btn'>Find Out More</Link>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                        </div>

                        <div className="movie-box">
                            <figure className="movie-image-wrapper">
                                <img className="movie-image" src={Avengers} alt="The Avengers" />
                                <div className="movie-box-links">
                                    <div className="info-container">
                                        <h4 className="hover-title">The Avengers</h4>
                                        <div className="find-more-btn-container">
                                            <Link to="/movie/tt0848228" className='find-more-btn'>Find Out More</Link>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                            
                        </div>

                        <div className="movie-box">
                            <figure className="movie-image-wrapper">
                                <img className="movie-image" src={SpidermanHomecoming} alt="Spider-man: Homecoming" />
                                <div className="movie-box-links">
                                    <div className="info-container">
                                        <h4 className="hover-title">Spider-man: Homecoming</h4>
                                        <div className="find-more-btn-container">
                                            <Link to="/movie/tt2250912" className='find-more-btn'>Find Out More</Link>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                            
                        </div>

                        <div className="movie-box">
                            <figure className="movie-image-wrapper">
                                <img className="movie-image" src={Minions} alt="Minions: Rise of Gru" />
                                <div className="movie-box-links">
                                    <div className="info-container">
                                        <h4 className="hover-title">Minions: Rise of Gru</h4>
                                        <div className="find-more-btn-container">
                                            <Link to="/movie/tt5113044" className='find-more-btn'>Find Out More</Link>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                            
                        </div>

                        <div className="movie-box">
                            <figure className="movie-image-wrapper">
                                <img className="movie-image" src={Spiderverse} alt="Spider-Man: Into the Spider-Verse" />
                                <div className="movie-box-links">
                                    <div className="info-container verse-info-links">
                                        <h4 className="hover-title verse-title">Spider-Man: Into the Spider-Verse</h4>
                                        <div className="find-more-btn-container">
                                            <Link to="/movie/tt4633694" className='find-more-btn'>Find Out More</Link>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                            
                        </div>

                        <div className="movie-box">
                            <figure className="movie-image-wrapper">
                                <img className="movie-image" src={Nope} alt="Nope" />
                                <div className="movie-box-links">
                                    <div className="info-container nope-info-links">
                                        <h4 className="hover-title nope-title">Nope</h4>
                                        <div className="find-more-btn-container">
                                            <Link to="/movie/tt10954984" className='find-more-btn'>Find Out More</Link>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default BottomHalf;
