import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Hero from './sections/Hero';
import NavBar from './sections/NavBar';
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main className=''>
      <NavBar />
      <Hero />
    </main>
  );
};
export default App;
