
import './App.css';
import  Navbar  from './components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCatergory from './pages/ShopCatergory';
import Product from './pages/Product';
import LoginSignUp from './pages/LoginSignUp';
import Cart from './pages/Cart';
import Footer from './components/Footer/Footer';
import men_banner from './components/Assets/banner_mens.png'
import women_banner from './components/Assets/banner_women.png'
import kids_banner from './components/Assets/banner_kids.png'

function App() {
  return (
    <div >
       <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCatergory banner={men_banner} category="men"/>}/>
        <Route path='/womens' element={<ShopCatergory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCatergory banner={kids_banner} category="kid"/>}/>
        <Route path="/product" element={<Product/>}>
           <Route path=':productId' element={<Product/>}/>
           </Route>
<Route path='/cart' element={<Cart/>}/>
<Route path='/login' element={<LoginSignUp/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
