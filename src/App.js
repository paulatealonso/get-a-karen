import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar/Navbar';
import Cats from './pages/Cats';
import Adopted from './pages/Adopted';
import Contact from './pages/Contact';
import { CatsContextProvider } from './context/CatsApi';
import Footer from './components/Footer/Footer';
import Sponsor from './pages/Sponsor';
import AdoptPage from './pages/AdoptPage';
import { AdoptedContextProvider } from './context/AdoptedApi';
import Discover from './pages/Discover';
import ShelterHomes from './pages/ShelterHomes';
import PaymentShelter from './pages/PaymentShelter';
import CatPage from './pages/CatPage';



function App() {
  return (
    <div className="App">
      <CatsContextProvider>
        <AdoptedContextProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/cats' element={<Cats />} />
            <Route path='/adopted' element={<Adopted />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/sponsor' element={<Sponsor />} />
            <Route path='/adoptpage' element={<AdoptPage />} />
            <Route path='/discover' element={<Discover />} />
            <Route path='/shelter' element={<ShelterHomes />} />
            <Route path='/payment' element={<PaymentShelter />} />
            <Route path='/cat/:name' element={<CatPage />} />
          </Routes>
          <Footer />
        </AdoptedContextProvider>
      </CatsContextProvider>
    </div>
  );
}

export default App;
