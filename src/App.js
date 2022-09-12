import './App.css';
import { Routes, Route } from "react-router-dom";
import Glamping from './travels/Glamping/components/Glamping';
import Cards from './components/Cards';

function App() {
  return (
    <div className="App">
      <Routes>  
        <Route exact path="/glamping" element={<Glamping/>}/>
        <Route exact path="/" element={<Cards/>}/>
      </Routes>
    </div>
  );
}

export default App;

{/* <Route exact path="/page/:id" render={RickAndMortyPage}/> */}