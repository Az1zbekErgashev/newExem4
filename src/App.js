
import './App.css';
import { Outlet } from 'react-router-dom';
import Navabar from './components/navabar/navabar';
function App() {
  return (
    <div className="App">
     <Navabar/>
    <Outlet/>
    </div>
  );
}

export default App;
