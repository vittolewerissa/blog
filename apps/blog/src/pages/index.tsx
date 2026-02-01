import Head from '../layout/Head';
import Header from '../components/LandingPage/Header';
import FeaturedWork from '../components/LandingPage/FeaturedWork';
import Projects from '../components/LandingPage/Projects';
import Footer from '../layout/Footer';

const Home = () => {
  return (
    <div className='bg-cream min-h-screen'>
      <Head />
      <Header />
      <FeaturedWork />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
