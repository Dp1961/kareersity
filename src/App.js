
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Faq from './Pages/Faq/Faq';
import Contact from './Pages/Contact/Contact';
import Blog from './Pages/Blogs/Blog';
import Blogdetail from './Pages/Blogs/Blogdetails';
import Course from './Pages/Course/Course';
import Cart from './Pages/Cart/Cart';
import Checkout from './Pages/Checkout/Checkout';
import Profile from './Pages/Profile/Profile';
import Wishlist from './Pages/Profile/Wishlist';
import Subscribe from './Pages/Profile/Subscribe';
import Mycourse from './Pages/Profile/Mycourse';
import Orderhistory from './Pages/Profile/Orderhistory';
import Question from './Pages/Profile/Question';
import Dashboard from './Pages/Profile/Dashboard';
import Educator from './Pages/Edcator/Educator';
import Assessmentsucess from './Pages/Profile/Assessmentsucess';
import Coursesucess from './Pages/Sucess/Coursesucess';
import Courselist from './Pages/Course/Courselist';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/faq' element={<Faq />} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/blog' element={<Blog/>} />
      <Route path='/blogdetail' element={<Blogdetail/>} />
      <Route path='/course' element={<Course/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/checkout' element={<Checkout/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/wishlist' element={<Wishlist/>} />
      <Route path='/subscribe' element={<Subscribe/>} />
      <Route path='/mycourse' element={<Mycourse/>} />
      <Route path='/orderhistory' element={<Orderhistory/>} />
      <Route path='/assessmentSucess' element={<Assessmentsucess/>} />
      <Route path='/question' element={<Question/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/educator' element={<Educator/>} />
      <Route path='/sucess' element={<Coursesucess/>} />
      <Route path='/course-detail' element={<Courselist/>} />  
    </Routes>
  </BrowserRouter>


  );
}

export default App;
