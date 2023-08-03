
import './App.css';
import {Routes, Route} from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import Home from './views/Home/Home';
import NewBook from './views/NewBook/NewBook';
import DeleteBook from './components/FormsBook/Delete/DeleteBook';
import PutBook from './components/FormsBook/Put/PutBook';

function App() {
  

  return (
    <>
     <Routes>
      <Route path='/' element={<LandingPage />}/>
      <Route path='/home' element={<Home/>} />
      <Route path='/postBook' element={<NewBook/>} />
      <Route path='/delete' element={<DeleteBook/>} />
      <Route path='/put' element={<PutBook/>} />
     </Routes>
    </>
  )
}

export default App
