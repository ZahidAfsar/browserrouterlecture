import './App.css';
import HomePageComponents from './components/HomePageComponents';
import PageTwoComponents from './components/PageTwoComponents';
import NavBarComponents from './components/NavBarComponents';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

// What is a functional component it is a function that returns jsx
function App() {
  return (
    //Browser Router enables clientside routing (Routes pages without full page reloading)
    <BrowserRouter>

    <NavBarComponents/>
    {/* Routes is used for your route structure */}
    <Routes>
      {/* Route defines our path to the individual components */}
      {/* '/' is our default route */}
      <Route path='/' element={<HomePageComponents/>}/>
      <Route path='pageTwo' element={<PageTwoComponents/>}/>
    </Routes>

    </BrowserRouter>
  );
}

export default App;
