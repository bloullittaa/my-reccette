import './assets/css/App.css';
import Home from './pages/Home.js'

import Presentation from './components/Presentation'
import Navegator from './components/Navegator';
import Cards from './components/Cards';

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
