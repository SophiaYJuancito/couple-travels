import './App.css';
import Glamping from './travels/Glamping/components/Glamping';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>  
        <Route exact path="/glamping" element={<Glamping/>}/>
      </Routes>
    </div>
  );
}

export default App;

{/* <Route exact path="/page/:id" render={RickAndMortyPage}/> */}