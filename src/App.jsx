import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Authentication from './components/authentication/auth/auth';
import Main from './components/sections/main';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Authentication />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
