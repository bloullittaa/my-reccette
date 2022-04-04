import './assets/css/App.css';
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
