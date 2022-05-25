import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllProduct from './Pages/Home/AllProduct';
import Home from './Pages/Home/Home';
import ProductDetails from './Pages/Home/ProductDetails';
import Footer from './Pages/Shared/Footer/Footer';
import Navbar from './Pages/Shared/Navbar';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/allProduct' element={<AllProduct></AllProduct>}></Route>
        <Route
          path='product/:id'
          element={<ProductDetails></ProductDetails>}
        ></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
