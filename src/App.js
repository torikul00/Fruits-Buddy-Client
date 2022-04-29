
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './components/pages/Blog/Blog';
// import Footer from './components/pages/Footer/Footer';
import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import Navbar from './components/pages/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      {/* <Footer /> */}
      

    </div>
  );
}

export default App;
