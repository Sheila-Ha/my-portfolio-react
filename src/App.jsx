// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Header from './assets/components/Header';
import Nav from './assets/components/NavBar';
import Hero from './assets/components/Hero';
import Footer from './assets/components/Footer';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Header />
      <Nav />
      <Hero />
      {/* background color on entire page */}
      <div className='bg-slate-300'>
        <main className="mx-3">
          <div className="container pt-20 pb-20">
            <Outlet />
            </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;