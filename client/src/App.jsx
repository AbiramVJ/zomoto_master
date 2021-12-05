
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Routes,Route, Navigate} from "react-router-dom";

import HomeLayoutHoc from './HOC/HomeLayoutHoc';
// page
import HomePage from "./pages/HomePage";
import RestaurantLayoutHoc from './HOC/Restaurant.hoc';
import RestaurantPage from './pages/RestaurantPage';



function App() {
  return (
    <>  
    {/* <Route path="/" exact>
        <Redirect to="/delivery" />
      </Route> */}
    {/* <Routes>
      <Route path="/" exact>
        <Navigate to="/delivery" />
      </Route>
      </Routes>
      <HomeLayoutHoc path="/:type" exact component={HomePage} />
   */}

    <Routes>
      <Route path="/" element={<Navigate replace to="/delivery" />} />
    </Routes>
    <HomeLayoutHoc path="/:type" exact component={HomePage} />
     <RestaurantLayoutHoc path="/restaurant/:id" exact component={RestaurantPage}/> 
     <RestaurantLayoutHoc path="/restaurant/:id/overview" exact component={RestaurantPage}/> 
     
  </>
   
  );
}

export default App;
