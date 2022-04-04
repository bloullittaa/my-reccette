import React from 'react'

import './assets/css/App.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; 
import Home from './pages/Home.js'
<<<<<<< HEAD
import Presentation from './Components/Presentation'
import Navegator from './Components/Navegator'
import Slidercards from './Components/Slidercards'
import Presentation2 from './Components/Presentation2'
import Main from './pages/Main';
import Starter from './pages/Starter';
=======
import Presentation from './components/Presentation'
import Navegator from './components/Navegator'
import Slidercards from './components/Slidercards'
import Presentation2 from './components/Presentation2'
>>>>>>> 8a251c99954a0d72721bbde78f2efe33166898ec




function App() {
  return (
    <div className="App">
      <Navegator/>
      <Presentation/>
      <Slidercards/>
      <Presentation2/>
      <Main/>
      <Starter/>
      
    </div>
  );


  
}
export default App;
