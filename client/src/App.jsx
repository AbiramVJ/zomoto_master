
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import HomeLayoutHoc from './HOC/HomeLayoutHoc';
// page
import HomePage from "./pages/HomePage";


function App() {
  return (
    <>   
     {/* <HomeLayoutHoc component={HomePage} path="/"/>
     <HomeLayoutHoc component={HomePage} path="/:type"/> */}

      <HomeLayoutHoc path="/:type" exact component={HomePage} />
  </>
   
  );
}

export default App;
