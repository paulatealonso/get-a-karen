import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar/Navbar';
import Cats from './pages/Cats';
import Adopted from './pages/Adopted';
import Contact from './pages/Contact';
import { CatsContextProvider } from './context/CatsApi';



function App() {
  return (
    <div className="App">
      <CatsContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/cats' element={<Cats />} />
          <Route path='/adopted' element={<Adopted />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </CatsContextProvider>
    </div>
  );
}

export default App;
