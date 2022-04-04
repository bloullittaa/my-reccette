<<<<<<< HEAD
import './assets/css/App.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; 
import Home from './pages/Home.js'
=======
import './assets/css/App.css';
import Presentation from './components/Presentation'
import Navegator from './components/Navegator'
import Slidercards from './components/Slidercards'
import Presentation2 from './components/Presentation2'
>>>>>>> 1ec3d13ac5a566b501ba21efb82d8ea742a450f2



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
