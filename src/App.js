import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './Components/Home';
import FilmDescription from './Components/FilmDescription';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/:id/:name" element = {<FilmDescription />} />
      </Routes>
    </div>
  );
}

export default App;
