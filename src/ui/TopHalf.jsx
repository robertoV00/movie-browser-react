import React from "react";
import MovieBackground from "../assets/moviebackground.jpg"

const TopHalf = () => {
  return (
    <>
      <section id="top-half">
        <figure class="movie-background-wrapper">
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
            class="movie-background"
            src={MovieBackground}
            alt=""
          />
          <div class="movie-background-text">
            <h1 class="background-title">
              Ticket<span class="title-plus">+</span>
            </h1>
            <h2 class="background-subtitle">
              With over <span>3000</span> movies on Ticket
              <span class="subtitle-plus">+</span>, the possibilites are
              endless!
            </h2>
            <div class="search-bar-wrapper">
              <input
                placeholder="Find a movie"
                class="search-bar"
                type="text"
              />
              <i class="fa-solid fa-magnifying-glass icon-search-bar magnifying-glass"></i>
            </div>
          </div>
        </figure>
      </section>
    </>
  );
};

export default TopHalf;
