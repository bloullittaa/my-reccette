import './assets/css/App.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; 
import Home from './pages/Home.js'


import Presentation from './Components/Presentation'
import Navegator from './Components/Navegator';
import Cards from './Components/Cards';
import { Component } from 'react';

function App() {
  return (
    <div className="App">
      <Navegator/>
      <Presentation/>
      <Cards/>
      
    </div>
  );


  
}
export default App;
