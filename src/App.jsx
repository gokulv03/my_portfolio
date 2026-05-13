import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import Spotlight from './components/Spotlight';
import InteractiveParticles from './components/InteractiveParticles';
import Home from './pages/Home';

function App() {
  const { scrollY } = useScroll();
  
  // Parallax effects
  const y1 = useTransform(scrollY, [0, 3000], [0, 800]);
  const y2 = useTransform(scrollY, [0, 3000], [0, -800]);
  const yGrid = useTransform(scrollY, [0, 3000], [0, 300]);

  return (
    <Router>
      <div className="aurora-bg">
          <motion.div style={{ y: y1 }} className="aurora-blob-1"></motion.div>
          <motion.div style={{ y: y2 }} className="aurora-blob-2"></motion.div>
          <motion.div style={{ y: yGrid }} className="grid-overlay-mesh"></motion.div>
        </div>
        
        <div className="fixed inset-0 z-0 mix-blend-screen opacity-80 pointer-events-auto">
           <InteractiveParticles />
        </div>
        
        <div className="grain-overlay"></div>
        <CustomCursor />
        <Spotlight />
        
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
