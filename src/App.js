import React from 'react'

import './assets/css/App.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; 
import Home from './pages/Home.js'
import Presentation from './components/Presentation'
import Navegator from './components/Navegator'
import Slidercards from './components/Slidercards'
import Presentation2 from './components/Presentation2'




function App() {
  return (
    <div className="App">
      <Navegator/>
      <Presentation/>
      <Slidercards/>
      <Presentation2/>
      
    </div>
  );


  
}
export default App;
