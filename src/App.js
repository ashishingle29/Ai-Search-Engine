import './App.css';
// import NavBar from './Components/NevBar/NavBar';
import Home from './Components/Home/Home';
import About from './Components/Pages/About';
import Images from './Components/Pages/Images';
import Error from './Components/Pages/Error';
import Gmail from './Components/Pages/Gmail';
import SearchPage from './Components/Result/SearchPage';
import React from "react";
import {
  BrowserRouter as Main,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Main>
        {/* <NavBar /> */}
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/images' element={<Images />} />
          <Route exact path='/gmail' element={<Gmail />} />
          <Route exact path='/search' element={<SearchPage />} />
          <Route exact path='/*' element={<Error />} />
       </Routes>
      </Main>
    </div>
  );
}

export default App;
