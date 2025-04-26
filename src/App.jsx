import { useState } from 'react'
import './App.css'
import HomePage from './HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import Movie from './ui/Movie';
import DescriptionPage from './pages/DescriptionPage';
import Sidebar from './Sidebar';

const App = ({movie}) => {

  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movies' element={<SearchPage />} />
          <Route path='/movie-test' element={<Movie />} />
          <Route path="/movie/:id" element={<DescriptionPage />} />
          {/* change the id at the end of this url ^ */}
        </Routes>
      </Router>
    </>
  )
}

export default App
