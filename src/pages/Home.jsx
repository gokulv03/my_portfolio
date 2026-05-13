import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen w-full overflow-hidden px-6 md:px-12 lg:px-24 pb-20 max-w-7xl mx-auto text-white">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  );
};

export default Home;
