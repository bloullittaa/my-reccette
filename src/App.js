import React from 'react'

import './assets/css/App.css'
import { BrowserRouter as Router, Switch, Route,Routes, Link } from "react-router-dom"; 
import Home from './pages/Home.js';
import Presentation from './Components/Presentation';
import Navegator from './Components/Navegator';
import Slidercards from './Components/Slidercards';
import Presentation2 from './Components/Presentation2';
import Main from './pages/Main';
import Starter from './pages/Starter';
import Desserts from './pages/Desserts';




function App() {
  return (
    <div className="App">
    
    <Routes>
    <Route path='/' element={<index/>}/>
   <Route path='/Main' element={<Main/>}/>
   <Route path='/Desserts' element={<Desserts/>}/>
   <Route path='/Starter' element={<Starter/>}/>
   </Routes>
      <Navegator/>
      <Presentation/>
      <Slidercards/>
      <Presentation2/>
     
      
    </div>
  );


  
}
export default App;
