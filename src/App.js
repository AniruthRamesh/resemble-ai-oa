import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Voices from './pages/Voices';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
       <Router>
        <Navbar/>
        <div className='pt-20'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/voices" element={<Voices />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
