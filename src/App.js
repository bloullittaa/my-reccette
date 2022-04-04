import './assets/css/App.css';
import Home from './pages/Home.js'
import Desserts from './pages/Desserts';

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
