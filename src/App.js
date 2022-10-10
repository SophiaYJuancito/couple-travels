import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import Glamping from './travels/Glamping/components/Glamping';
import RollerSkate from './travels/RollerSkate/components/RollerSkate';
import Cards from './components/Cards';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <Routes>  
        <Route exact path="/glamping" element={<Glamping/>}/>
        <Route exact path="/roller-skate" element={<RollerSkate/>}/>
        <Route exact path="/" element={<Cards/>}/>
      </Routes>
    </div>
  );
}

export default App;

{/* <Route exact path="/page/:id" render={RickAndMortyPage}/> */}