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
      <main className="w-full text-ink">
        <Hero />
        <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Contact />
        </div>
      </main>
    </>
  );
};

export default Home;
