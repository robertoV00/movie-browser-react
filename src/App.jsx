import { useState } from 'react'
import './App.css'
import HomePage from './HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movies' element={<SearchPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
