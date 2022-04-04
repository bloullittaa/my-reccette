import React from 'react'

import './assets/css/App.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; 
import Home from './pages/Home.js'
import Presentation from './Components/Presentation'
import Navegator from './Components/Navegator'
import Slidercards from './Components/Slidercards'
import Presentation2 from './Components/Presentation2'




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
