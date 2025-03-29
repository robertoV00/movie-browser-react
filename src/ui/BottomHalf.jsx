import React from 'react';
import GuardiansGalaxy from "../assets/guadiansGalaxy.jpg"
import Avengers from "../assets/avengers.jpg"
import SpidermanHomecoming from "../assets/homecoming.jpg"
import Minions from "../assets/minions.jpg"
import Spiderverse from "../assets/spiderverse.jpg"
import Nope from "../assets/nope.jpg"

const BottomHalf = () => {
    return (
        <>
            <section id="bottom-half">
            <div className="container movies-container">
                <div className="row movies-row">
                    <div className="movies-top">
                        <h2 className="bottom-header">Search results for: <span className="movie-title-display"></span></h2>
                    </div>
                    <div className="movie-selection-wrapper" id="movies-list">
                        <div className="movie-box">
                            <figure className="movie-image-wrapper">
                                <img className="movie-image" src={GuardiansGalaxy} alt="Guardians of The Galaxy" />
                                <div className="movie-box-links">
                                    <div className="info-container">
                                        <h4 className="hover-title">Guardians of The Galaxy Vol. 2</h4>
                                        <div className="time info">
                                            <i className="fa-solid fa-clock icon"></i>
                                            <h4 className="right-side-text">136m</h4>
                                        </div>
                                        <div className="rating info">
                                            <i className="fa-solid fa-star icon"></i>
                                            <h4 className="right-side-rating">4.5</h4>
                                        </div>
                                        <div className="language info">
                                            <i className="fa-solid fa-earth-americas icon"></i>
                                            <h4 className="right-side-language">English</h4>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                            <div className="movie-name-wrapper">
                                <h4 className="movie-name">Guardians of the Galaxy Vol. 2</h4>
                            </div>
                        </div>

                        <div className="movie-box">
                            <figure className="movie-image-wrapper">
                                <img className="movie-image" src={Avengers} alt="The Avengers" />
                                <div className="movie-box-links">
                                    <div className="info-container">
                                        <h4 className="hover-title">The Avengers</h4>
                                        <div className="time info">
                                            <i className="fa-solid fa-clock icon"></i>
                                            <h4 className="right-side-text">136m</h4>
                                        </div>
                                        <div className="rating info">
                                            <i className="fa-solid fa-star icon"></i>
                                            <h4 className="right-side-rating">4.5</h4>
                                        </div>
                                        <div className="language info">
                                            <i className="fa-solid fa-earth-americas icon"></i>
                                            <h4 className="right-side-language">English</h4>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                            <div className="movie-name-wrapper">
                                <h4 className="movie-name">The Avengers</h4>
                            </div>
                        </div>

                        <div className="movie-box">
                            <figure className="movie-image-wrapper">
                                <img className="movie-image" src={SpidermanHomecoming} alt="Spider-man: Homecoming" />
                                <div className="movie-box-links">
                                    <div className="info-container">
                                        <h4 className="hover-title">Spider-man: Homecoming</h4>
                                        <div className="time info">
                                            <i className="fa-solid fa-clock icon"></i>
                                            <h4 className="right-side-text">136m</h4>
                                        </div>
                                        <div className="rating info">
                                            <i className="fa-solid fa-star icon"></i>
                                            <h4 className="right-side-rating">4.5</h4>
                                        </div>
                                        <div className="language info">
                                            <i className="fa-solid fa-earth-americas icon"></i>
                                            <h4 className="right-side-language">English</h4>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                            <div className="movie-name-wrapper">
                                <h4 className="movie-name">Spider-man: Homecoming</h4>
                            </div>
                        </div>

                        <div className="movie-box">
                            <figure className="movie-image-wrapper">
                                <img className="movie-image" src={Minions} alt="Minions: Rise of Gru" />
                                <div className="movie-box-links">
                                    <div className="info-container">
                                        <h4 className="hover-title">Minions: Rise of Gru</h4>
                                        <div className="time info">
                                            <i className="fa-solid fa-clock icon"></i>
                                            <h4 className="right-side-text">136m</h4>
                                        </div>
                                        <div className="rating info">
                                            <i className="fa-solid fa-star icon"></i>
                                            <h4 className="right-side-rating">4.5</h4>
                                        </div>
                                        <div className="language info">
                                            <i className="fa-solid fa-earth-americas icon"></i>
                                            <h4 className="right-side-language">English</h4>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                            <div className="movie-name-wrapper">
                                <h4 className="movie-name">Minions: Rise of Gru</h4>
                            </div>
                        </div>

                        <div className="movie-box">
                            <figure className="movie-image-wrapper">
                                <img className="movie-image" src={Spiderverse} alt="Spider-Man: Into the Spider-Verse" />
                                <div className="movie-box-links">
                                    <div className="info-container verse-info-links">
                                        <h4 className="hover-title verse-title">Spider-Man: Into the Spider-Verse</h4>
                                        <div className="time info">
                                            <i className="fa-solid fa-clock icon"></i>
                                            <h4 className="right-side-text">136m</h4>
                                        </div>
                                        <div className="rating info">
                                            <i className="fa-solid fa-star icon"></i>
                                            <h4 className="right-side-rating">4.5</h4>
                                        </div>
                                        <div className="language info">
                                            <i className="fa-solid fa-earth-americas icon"></i>
                                            <h4 className="right-side-language">English</h4>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                            <div className="movie-name-wrapper">
                                <h4 className="movie-name">Spider-Man: Into the Spider-Verse</h4>
                            </div>
                        </div>

                        <div className="movie-box">
                            <figure className="movie-image-wrapper">
                                <img className="movie-image" src={Nope} alt="Nope" />
                                <div className="movie-box-links">
                                    <div className="info-container nope-info-links">
                                        <h4 className="hover-title nope-title">Nope</h4>
                                        <div className="time info">
                                            <i className="fa-solid fa-clock icon"></i>
                                            <h4 className="right-side-text">136m</h4>
                                        </div>
                                        <div className="rating info">
                                            <i className="fa-solid fa-star icon"></i>
                                            <h4 className="right-side-rating">4.5</h4>
                                        </div>
                                        <div className="language info">
                                            <i className="fa-solid fa-earth-americas icon"></i>
                                            <h4 className="right-side-language">English</h4>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                            <div className="movie-name-wrapper">
                                <h4 className="movie-name">Nope</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default BottomHalf;
