import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

// NOTE: Atmospheric layers (CustomCursor, Spotlight, InteractiveParticles,
// BackgroundMesh, VantaBackground) are intentionally not rendered in the
// brutalist redesign. The component files remain on disk for reference.

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
