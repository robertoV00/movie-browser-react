import React, { useState } from "react";
import MovieBackground from "../assets/moviebackground.jpg"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TopHalf = () => {

  const searchInput = document.querySelector(".search-bar");
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      // Navigate to search page with the search query
      navigate(`/movies?search=${searchValue}`);
    }
  };

  return (
    <>
      <section id="top-half">
        <figure className="movie-background-wrapper">
          {/* <nav class="navbar">
            <div class="left-side">
              <div class="movie-logo-wrapper">
                <img class="movie-logo" src="/assets/movielogo.png" alt="" />
              </div>
              <a href="#home" class="nav-link">
                Home
              </a>
              <a href="#home" class="nav-link">
                Contact
              </a>
            </div>
            <div class="right-side">
              <div class="search-icon-wrapper" onclick="activateSearch()">
                <input
                  type="text"
                  class="nav-input"
                  placeholder="Find a movie"
                />
                <i
                  class="fa-solid fa-magnifying-glass nav-glass icon-navbar"
                  onclick="activateSearch()"
                ></i>
              </div>
              <div class="settings-icon-wrapper">
                <i class="fa-solid fa-gear icon-navbar"></i>
              </div>
            </div>
          </nav> */}
          <img
            className="movie-background"
            src={MovieBackground}
            alt=""
          />
          <div className="movie-background-text">
            <h1 className="background-title">
              Ticket<span className="title-plus">+</span>
            </h1>
            <h2 className="background-subtitle">
              With over <span>3000</span> movies on Ticket
              <span className="subtitle-plus">+</span>, the possibilites are
              endless!
            </h2>
            <div className="search-bar-wrapper">
              <input
                placeholder="Find a movie"
                className="search-bar"
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyDown={handleKeyPress}
              />
              <i className="fa-solid fa-magnifying-glass icon-search-bar magnifying-glass"></i>
            </div>
          </div>
        </figure>
      </section>
    </>
  );
};

export default TopHalf;
