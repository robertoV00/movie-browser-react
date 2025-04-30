import React from 'react';
import TopHalf from './ui/TopHalf';
import BottomHalf from './ui/BottomHalf';
import Sidebar from './Sidebar';


const HomePage = () => {
    return (
        <>
            <div className="layout">
            <Sidebar />
            <div className="main-content">
                <TopHalf />
                <BottomHalf />
            </div>
        </div>
        </>
    );
}

export default HomePage;
