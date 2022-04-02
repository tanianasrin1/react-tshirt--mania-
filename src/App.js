import { Route, Routes } from 'react-router-dom';
import './App.css';
import GrandPa from './components/GrandPa/GrandPa';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import OderReview from './components/OrderReview/OderReview';

function App() {
  return (
    <div className="App">
       <Header></Header>

       <Routes>
         <Route path='/' element = {<Home></Home>} ></Route>
         <Route path= '/home' element = {<Home></Home>} ></Route>
         <Route path = '/oderReview' element = {<OderReview></OderReview>} ></Route>
         <Route path = '/grandPa' element = {<GrandPa></GrandPa>} ></Route>
       </Routes>
    </div>
  );
}

export default App;
