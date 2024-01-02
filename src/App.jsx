import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Authentication from './components/authentication/auth/auth';
import MainPage from './components/sections/mainPage/mainPage';
import FloorPage from './components/sections/floorPage/floorPage';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Authentication />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/floor/:floor" element={<FloorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
