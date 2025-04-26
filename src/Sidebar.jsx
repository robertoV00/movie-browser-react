import { faCircleInfo, faFilm, faGear, faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div>
            <div className="sidebar-container">
                <h3 className="sidebar-title">Menu</h3>
                <ul className="sidebar-list">
                    <div className='sidebar-top'>
                        <Link to="/" className="sidebar-item sidebar-home">
                        <FontAwesomeIcon icon={faHouse} className='sidebar-icon' />Home</Link>
                        <Link to="/movies" className="sidebar-item sidebar-movies">
                        <FontAwesomeIcon icon={faFilm} className='sidebar-icon' />Movies</Link>
                    </div>
                    <hr className='sidebar-break-space'></hr>
                    <div className='sidebar-bottom'>
                        <Link disabled to="/" className="sidebar-item sidebar-settings">
                        <FontAwesomeIcon icon={faGear} className='sidebar-icon' />Settings</Link>
                        <Link disabled to="/" className="sidebar-item sidebar-help">
                        <FontAwesomeIcon icon={faCircleInfo} className='sidebar-icon' />Help</Link>
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
