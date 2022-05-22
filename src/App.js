
import React from 'react';
import './App.css';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
// import SearchPage from './SearchPage'
import MarketPlace from './MarketPlace'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (

    // BEM
    <div className="app">
      <div className="app">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/marketplace" element={<MarketPlace />} />
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;