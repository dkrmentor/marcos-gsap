import React, { Component } from 'react';
import './assets/scss/style.scss';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Error from './pages/404';
import Moca from './pages/Moca';
import Packing from './pages/Packing';
import Personality from './pages/Personality';
import Completion from './pages/Completion';

class App extends Component {
  render() {
    return (    
      <BrowserRouter>
          <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='*' element={<Error/>}/>
          <Route path='/moca' element={<Moca/>}/>
          <Route path='/packing' element={<Packing/>}/>
          <Route path='/personality' element={<Personality />}/>
          <Route path='/Completion' element={<Completion />}/>
        </Routes>
    </BrowserRouter>
      );
  }
}
 
export default App;
