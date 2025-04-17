import React from 'react';

const SearchPageNavbar = () => {
    return (
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
    );
}

export default SearchPageNavbar;
