import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Fooldal from './pages/Fooldal';
import Idopont from './pages/idopontok.jsx';
import Szolgaltatasok from './pages/szolgaltatasok.jsx';
import Navigacio from './assets/Navigacio.jsx';

const App = () => {
  return (
    <div className='App'>
      <Navigacio/>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Fooldal/>}></Route>
          <Route exact path='/foglalas' element={<Idopont/>}></Route>
          <Route exact path='/szolgaltatasok' element={<Szolgaltatasok/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App