
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/pages/Footer/Footer';
import Home from './components/pages/Home/Home';
import Navbar from './components/pages/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
      

    </div>
  );
}

export default App;
