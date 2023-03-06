import React from 'react';
import {
  BrowserRouter as Router,
  Routes as RouterCover,
  Route,
} from "react-router-dom";
import HomePage from './scenes/HomePage/HomePage';
import InnerAbout from './scenes/InnerAbout/InnerAbout';
import InnerContact from './scenes/InnerContact/InnerContact';

const App = () => {
  return (
    <div className="App">
      <Router>
        <RouterCover>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<InnerAbout />} />
          <Route path="/contact" element={<InnerContact />} />
        </RouterCover>
      </Router>
    </div>
  );
}

export default App;
