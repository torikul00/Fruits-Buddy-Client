
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './components/pages/Blog/Blog';
import Footer from './components/pages/Footer/Footer';
import Home from './components/pages/Home/Home';
import Inventory from './components/pages/Inventory/Inventory';
import Login from './components/pages/Login/Login';
import Navbar from './components/pages/Navbar/Navbar';
import SignUp from './components/pages/SignUp/SignUp';

import { Toaster } from 'react-hot-toast';
import ForgotPassword from './components/pages/ForgotPass/ForgotPassword';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Navbar />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/forgotPassword' element={<ForgotPassword />} />
        <Route path='/inventory' element={
          <RequireAuth>
             <Inventory />
          </RequireAuth>
        } />
      </Routes>
      <Footer />


    </div>
  );
}

export default App;
