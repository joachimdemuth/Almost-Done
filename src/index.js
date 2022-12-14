import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import NftGallery from './routes/NftGallery';
import Spotify from './routes/Spotify';
import Contact from './routes/Contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Router>

      <Header />
      
      <Routes>
        <Route exact path="/almost-done" element={<App />} />
        <Route path="/gallery" element={<NftGallery />} />
        <Route path="/spotify" element={<Spotify />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
<Footer />
    </Router>


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
