
import './App.css';

import HomeLayoutHoc from './HOC/HomeLayoutHoc';
// page
import HomePage from "./components/HomePage/HomePage";


function App() {
  return (
    <>   
     <HomeLayoutHoc component={HomePage} path="/"/>
     <HomeLayoutHoc component={HomePage} path="/:type"/>
  </>
   
  );
}

export default App;
