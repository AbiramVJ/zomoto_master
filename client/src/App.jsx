
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Routes,Route, Navigate} from "react-router-dom";
import { useEffect } from 'react';

//redux
import { getMySelf } from './redux/reducers/user/user.action';
import { useDispatch } from 'react-redux';


//hoc
import CheckoutLayoutHoc from './HOC/Checkout.hoc';
import HomeLayoutHoc from './HOC/HomeLayoutHoc';
// page
import HomePage from "./pages/HomePage";
import RestaurantLayoutHoc from './HOC/Restaurant.hoc';
//import RestaurantPage from './pages/RestaurantPage';
import Checkout from "./pages/CheckoutPage";

//component
import Overview from './components/restaurant/OverView';
import OrderOnline from './components/restaurant/OrderOnline';
import Reviews from './components/restaurant/Reviews/Reviews';
import Menu from './components/restaurant/Menu/Menu';
import Photos from './components/restaurant/Photos/Photos';
import Redirect from './pages/Restaurant/Redirect';
//import CheckoutNavbar from './components/Navbar/CheckoutNavbar';






function App() {

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getMySelf());
  })
  return (
    <>  
 

    <Routes>
      <Route path="/" element={<Navigate replace to="/delivery" />} />
      {/* <Route path="/restaurant/:id" element={<Navigate replace to="/restaurant/:id/overview"/>} /> */}
      
  
    </Routes>

    
     <HomeLayoutHoc path="/:type" exact component={HomePage} />
     <RestaurantLayoutHoc path="/restaurant/:id" exact component={Redirect}/> 
      <RestaurantLayoutHoc path="/restaurant/:id/overview" exact component={Overview}/> 
     <RestaurantLayoutHoc path="/restaurant/:id/order-online" exact component={OrderOnline}/> 
     <RestaurantLayoutHoc path="/restaurant/:id/reviews" exact component={Reviews}/> 
     <RestaurantLayoutHoc path="/restaurant/:id/menu" exact component={Menu}/>
     <RestaurantLayoutHoc path="/restaurant/:id/photos" exact component={Photos}/>
     <CheckoutLayoutHoc path="/checkout/orders" exact component={Checkout} />
    
        
  </>
   
  );
}

export default App;
