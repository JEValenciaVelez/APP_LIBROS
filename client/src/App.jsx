
import './App.css';
import {Routes, Route} from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import Home from './views/Home/Home';
import NewBook from './views/NewBook/NewBook';

function App() {
  

  return (
    <>
     <Routes>
      <Route path='/' element={<LandingPage />}/>
      <Route path='/home' element={<Home/>} />
      <Route path='/postBook' element={<NewBook/>} />
     </Routes>
    </>
  )
}

export default App
