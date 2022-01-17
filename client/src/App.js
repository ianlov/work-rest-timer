import { Routes, Route } from 'react-router-dom';
import './App.css';
import Splash from './screens/Splash.jsx';
import Timer from './screens/Timer.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/:work" element={<Timer />} />
      </Routes>
    </div>
  );
}

export default App;
